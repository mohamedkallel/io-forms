import { Type, TemplateRef } from '@angular/core';
import { AbstractField } from './fields/abstract-field';
import { Observable } from 'rxjs';

export interface FormConfig {
    class?: string[],
    title: ((string) => string) | string,
    formTemplate?: string,
    sections?: {
        sectionClass?: string,
        fields: {
            [key: string]: FieldConfig
        }
    }[],
    fields?: {
        [key: string]: FieldConfig
    }
    validators?: (() => any) | ((() => any)[])
}

export interface FieldConfig{
    type: 'array' | 'group' | 'control',
    config?: FormConfig,
    groupTitle?: string,
    fieldClass?: string[],
    component?: Type<AbstractField> | string,
    validation?: Validation,
    attributes?: { [key: string]: any },
    options?: {
        list:any[] | Observable<any[]> | DefaultOption[] | Observable<DefaultOption>,
        value?: (option) => any
        label?: (option) => any
    }
    events?: { [key: string]: (event) => any }
}

export interface Validation {
    controls: any[]
    errors: ErrorMessage[]
}

export interface DefaultOption{
    value: any;
    label: any;
}

export interface ErrorMessage {
    error: string,
    message: string
}

