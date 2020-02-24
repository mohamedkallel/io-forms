
export interface FormConfig{
    fields: {[key: string]: FormControlConfig | FormGroupConfig | FormArrayConfig},
    validators?: (() => any) | ((() => any)[])
    
}

export interface FormControlConfig{
    type?: "control"
    attributes: {
        [key: string] : any
    }
    validaiton: string
}

export interface FormGroupConfig{
    type: "group"
    config: FormConfig
}

export interface FormArrayConfig {
    type: "array"
    arrayConfig: FormConfig
}