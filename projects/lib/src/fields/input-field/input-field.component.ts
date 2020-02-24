import { Component, OnInit, ViewChild, ElementRef, Input, Inject, Injector, AfterViewInit } from '@angular/core';
import { AbstractField } from '../abstract-field';
import { AbstractFormField } from '../abstract-form-field';

@Component({
  selector: 'input-field',
  template:`
  <mat-form-field [ngClass]="class" [appearance]="appearance">
    <mat-label>{{attributes.placeholder}}</mat-label>
    <!-- type is input -->
    <input matInput [formControl]="formControl" #field>
    <mat-error [ngStyle]="{'display':(formControl.invalid?'block':'none')}">{{getErrorMessage()}}</mat-error>
  </mat-form-field>`,
  styleUrls: ['../form-field.component.scss']
})
export class InputField extends AbstractFormField implements AfterViewInit {

  @ViewChild("field", null) field: ElementRef;
  type="input"

  constructor(@Inject("FIELD_DATA") fieldData) {
    super(fieldData)
  }

  ngAfterViewInit() {
    Object.keys(this.attributes).forEach(key => this.field.nativeElement[key] = this.attributes[key])
  }
}
