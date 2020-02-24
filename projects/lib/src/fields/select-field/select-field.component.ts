import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { AbstractField } from '../abstract-field';
import { isObservable, Observable, of } from 'rxjs';
import { MatSelect } from '@angular/material';
import { AbstractFormField } from '../abstract-form-field';

@Component({
  selector: 'select-field',
  template:`
  <mat-form-field [ngClass]="class" [appearance]="appearance">
    <mat-label>{{attributes.placeholder}}</mat-label>
    <mat-select *ngIf="type==='select'" [formControl]="formControl" #select>
        <mat-form-field *ngIf="filterEnabled" class="search-style">
            <mat-label>Search</mat-label>
            <input matInput (keyup)="onFilter($event)">
            <mat-icon matSuffix>
                    search
            </mat-icon>
        </mat-form-field>
        <mat-option *ngFor="let option of options" [value]="getValue(option)">
            {{getLabel(option)}}
        </mat-option>
    </mat-select>
    <mat-error [ngStyle]="{'display':(formControl.invalid?'block':'none')}">{{getErrorMessage()}}</mat-error>
  </mat-form-field>`,
  styleUrls: ['../form-field.component.scss']
})
export class SelectField extends AbstractFormField implements OnInit {

  type = "select"
  options
  rootOptions: any[];
  filterEnabled = false

  @ViewChild(MatSelect, { static: false }) set select(select) {
    if (!select)
      return
    for (let key in this.attributes) {
      if (key === "options")
        continue;
      select[key] = this.attributes[key]
    }
    this.bindEvents(select);
  }

  constructor(@Inject("FIELD_DATA") fieldData) {
    super(fieldData)
    let obs: Observable<any>
    if (isObservable(this.attributes.options)) {
      obs = (this.attributes.options as Observable<any>)
    } else {
      obs = of(this.attributes.options)
    }
    obs.subscribe(res => {
      this.rootOptions = res
      this.options = this.rootOptions
    });
    this.filterEnabled = this.attributes.filterEnabled;
  }

  ngOnInit() {
  }

  getValue(option) {
    return this.attributes.getValue ? this.attributes.getValue(option) : option
  }

  getLabel(option) {
    return this.attributes.getLabel ? this.attributes.getLabel(option) : option
  }

  onFilter(event) {
    if (!event.currentTarget.value) {
      return this.rootOptions;
    }
    if (this.events.filter) {
      let obs = this.events.filter(event.currentTarget.value, this.rootOptions);
      if (isObservable(obs)) {
        obs.subscribe(res => this.options = res)
      } else {
        this.options = obs;
      }

    } else {
      this.options = this.rootOptions.filter(opt => this.getLabel(opt).indexOf(event.currentTarget.value) >= 0)
    }

  }

}
