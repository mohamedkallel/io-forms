import { AbstractField } from './abstract-field';


export class AbstractFormField extends AbstractField {

    appearance = "legacy"
    constructor(fieldData) {
        super(fieldData)
        this.appearance = this.attributes.appearance || "legacy";
    }
}