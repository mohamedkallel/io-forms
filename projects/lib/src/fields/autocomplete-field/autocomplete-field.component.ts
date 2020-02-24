import { Component, OnInit, Inject, ViewChild, EventEmitter } from '@angular/core';
import { AbstractFormField } from '../abstract-form-field';
import { isObservable, Observable, of } from 'rxjs';
import { MatAutocomplete } from '@angular/material';

@Component({
  selector: 'autocomplete-field',
  template:`
  <mat-form-field [ngClass]="class" [appearance]="appearance">
    <mat-label>{{attributes.placeholder}}</mat-label>
    <input matInput [formControl]="formControl" [matAutocomplete]="auto" (keyup)="onFilter($event)">
    <mat-autocomplete #auto="matAutocomplete" [autoActiveFirstOption]="attributes.autoActiveFirstOption" 
        [classList]="attributes.classList" [disableRipple]="attributes.disableRipple"
        [displayWith]="attributes.displayWith" [panelWidth]="attributes.panelWidth">
        <mat-option *ngFor="let option of options" [value]="option" [innerHTML]="render(option)">
        </mat-option>
    </mat-autocomplete>
    <mat-error [ngStyle]="{'display':(formControl.invalid?'block':'none')}">{{getErrorMessage()}}</mat-error>
  </mat-form-field>`,
  styleUrls: ['../form-field.component.scss']
})
export class AutocompleteField extends AbstractFormField implements OnInit {

  type="autocomplete"
  rootOptions=[]
  options=[]

  @ViewChild(MatAutocomplete, {static: false}) set autocomplete(autocomplete: MatAutocomplete){
    this.bindEvents(autocomplete)
  }

  constructor(@Inject("FIELD_DATA") fieldData) { 
    super(fieldData)
    debugger;
    let obs: Observable<any>
    if(isObservable(this.attributes.options)){
      obs = (this.attributes.options as Observable<any>)
    }else{
      obs = of(this.attributes.options)
    }
    obs.subscribe(res => {
      this.rootOptions = res
      this.options = this.rootOptions;
    });
  }


  ngOnInit() {
  }

  render(opt){
    if(this.attributes.render){
      return this.attributes.render(opt)
    }
    return opt;
  }
  getValue(opt){
    if(this.attributes.getValue){
      return this.attributes.getValue(opt)
    }
    return opt;
  }
  onFilter(event){
    if(this.attributes.filter){
      let filtredOptions = this.attributes.filter(this.formControl.value, this.rootOptions);
      var obs : Observable<any>
      if(isObservable(filtredOptions)){
        obs = filtredOptions
      }else{
        obs = of(filtredOptions)
      }
      obs.subscribe(res => this.options = res)
    }else{
      this.options = this.rootOptions.filter(opt => opt.toString().indexOf(this.formControl.value)>=0)
    }
  }

}
