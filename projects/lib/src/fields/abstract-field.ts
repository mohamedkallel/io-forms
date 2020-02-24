import { ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { ErrorMessage } from '../form-config';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';


export abstract class AbstractField implements OnDestroy{
    attributes: { [key: string]: any }
    events: { [key: string]: any }
    formControl: FormControl
    errors: ErrorMessage[] = []
    class: string[]

    fieldElementSubscriptions: Subscription[] = []



    constructor(protected fieldData) {
        this.formControl = this.fieldData.formControl;
        this.attributes = this.fieldData.attributes || {};
        this.errors = this.fieldData.errors || {};
        this.class = this.fieldData.class;
        this.events = this.fieldData.events || {};

    }


    getErrorMessage() {
        if (this.errors && this.errors.length) {
            for (var i = 0; i < this.errors.length; i++) {
                if (this.formControl.hasError(this.errors[i].error)) {
                    return this.errors[i].message
                }
            }
        }
        return JSON.stringify(this.formControl.errors)

    }

    bindEvents(element) {
        this.ngOnDestroy();
        if(!this.events)
            return;
        Object.keys(this.events).forEach(key => {
            if (Object.keys(element).indexOf(key) >= 0 && element[key] instanceof EventEmitter) {
                this.fieldElementSubscriptions.push((element[key] as EventEmitter<any>).subscribe(event => this.events[key](event)))
            }
        })
    }

    ngOnDestroy(){
        this.fieldElementSubscriptions.forEach(s => s.unsubscribe());
        this.fieldElementSubscriptions = []
    }
}