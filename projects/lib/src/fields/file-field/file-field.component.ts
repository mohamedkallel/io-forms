import { Component, OnInit, Inject, ElementRef, SecurityContext } from '@angular/core';
import { AbstractField } from '../abstract-field';
import { Observable, Subject, from } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { DomSanitizer, SafeResourceUrl, SafeValue } from '@angular/platform-browser';
import { CLOUD } from "./constant"


@Component({
  selector: 'file-field',
  templateUrl: './file-field.component.html',
  styleUrls: ['./file-field.component.scss']
})
export class FileField extends AbstractField implements OnInit {

  cloudImage = CLOUD;
  multiple = false;
  accept = ""
  dataObjects: any[] = []
  dataType: {
    new(): any;
  }
  dataGetter: (detail) => string
  dataSetter: (data, detail) => any;
  constructor(@Inject("FIELD_DATA") fieldData, private sanitizer: DomSanitizer) {
    super(fieldData);
    this.formControl.valueChanges.subscribe(value => {
      if (Array.isArray(value))
        this.dataObjects = value
      else
        this.dataObjects = [value]
    })
  }


  ngOnInit() {
    this.multiple = this.attributes.multiple
    if (this.attributes.accept) {
      this.accept = this.attributes.accept
    }
    if (this.attributes.dataType) {
      this.dataType = this.attributes.dataType
      this.dataGetter = this.attributes.dataGet;
      this.dataSetter = this.attributes.dataSet;
    }
  }

  onFileChange(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    from(Array.from(fileInput.files)).pipe(
      flatMap(res => this.extractData(res)),
      map(data => {
        this.multiple ? this.dataObjects.push(this.createFile(data)) : this.dataObjects = [this.createFile(data)]
        return this.dataObjects
      })
    ).subscribe(dataObjects => {
      this.setDataToControl();

    })
  }

  setDataToControl() {
    if (this.multiple) {
      this.formControl.setValue(this.dataObjects)
    } else if (this.dataObjects && this.dataObjects.length > 0) {
      this.formControl.setValue(this.dataObjects[0])
    }
  }

  getFileData(obj): any {
    if (this.dataGetter) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(this.dataGetter(obj))
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(obj.data)
  }

  createFile(data) {
    if (this.dataSetter) {
      const file = new this.dataType();
      this.dataSetter(data.data, file);
      file.type = data.type
      return file;
    }

    return data
  }



  extractData(file): Observable<any> {
    const o = new Subject<any>();
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      o.next({ data: reader.result as string, type: file.type });
      o.complete()
    };
    reader.onerror = function (error) {
      o.error(error)
      o.complete()
    };
    return o;
  }

  open(obj) {
    var src = ""
    if (this.dataGetter) {
      src = this.dataGetter(obj)
    } else {
      src = obj.data
    }
    const parsed = this.parse(src)
    const blob = this.b64toBlob(parsed.data, parsed.type);
    const blobUrl = URL.createObjectURL(blob);
    
    window.open(blobUrl)
  }

  parse(b64data){
    var headData = b64data.split(",")
    var type = headData[0].split(":")[1].split(";")[0];
    return {data: headData[1], type}
  }

  delete(obj) {
    const index = this.dataObjects.indexOf(obj)
    if (index >= 0) {
      this.dataObjects.splice(index, 1)
    }
    this.setDataToControl()
  }

  b64toBlob = (b64Data, contentType='', sliceSize=512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
  
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
  
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
  
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
  
    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }

}
