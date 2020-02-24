import { Component, OnInit, Inject, ViewChild, ViewContainerRef } from '@angular/core';
import { AbstractFormField } from '../abstract-form-field';
import { MatDatepicker } from '@angular/material';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'datepicker-field',
  templateUrl: '../form-field.component.html',
  styleUrls: ['../form-field.component.scss']
})
export class DatepickerField extends AbstractFormField implements OnInit {


  type="datepicker"
  @ViewChild(MatDatepicker, {static: false}) set datepicker(datepicker){
    if (!datepicker)
      return
    for (let key in this.attributes) {
        datepicker[key] = this.attributes[key]
    }
    this.bindEvents(datepicker);
  }

  constructor(@Inject("FIELD_DATA") fieldData, private _viewContainerRef: ViewContainerRef) {
    super(fieldData)
   
  }

  ngOnInit() {
  }

}
