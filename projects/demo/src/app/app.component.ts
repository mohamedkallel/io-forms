import { Component } from '@angular/core';
import { FormConfig } from 'ngx-ioform/form-config';
import { InputField, AutocompleteField, FileField } from 'ngx-ioform/public_api';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formConfig: FormConfig = {
    title: "Test Form",
    sections:[
      {
        sectionClass: "profile",
        fields:{
          username:{
            type: "control",
            component: InputField,
            attributes:{
              placeholder: "Username"
            },
            validation:{
              controls: [Validators.required],
              errors:[{
                error:"required",
                message: "this field is required"
              }]
            }
          },
          fullname:{
            type: "control",
            component: InputField,
            attributes: {
              placeholder: "Full Name"
            }
          },
          country:{
            type: "control",
            component: AutocompleteField,
            attributes:{
              placeholder: "Country",
              options: ["Tunisia", "Paraguay", "USA"]
            }
          },
          certification:{
            type: "array",
            config:{
              title: "Certifications",
              sections: [
                {
                  fields:{
                    certificationDate: {
                      type: "control",
                      component: InputField,
                      attributes:{
                        placeholder: "Certification Date"
                      },
                      validation:{
                        controls: [Validators.required],
                        errors:[{
                          error:"required",
                          message: "this field is required"
                        }]
                      }
                    },
                    certificationName: {
                      type: "control",
                      component: InputField,
                      attributes:{
                        placeholder: "Certification Name"
                      }
                    }
                  }
                }
              ]
              
              
            }
          }
          /*file:{
            type: "control",
            component: FileField,
            attributes: {
              multiple: true
            },
            events:{

            }
            
          }*/
        }
      }
    ],
    fields:{
      fullname2:{
        type: "control",
        component: "input",
        attributes: {
          placeholder: "Full Name2",
          type: "date"
        },
        events:{
          keyup: (evt) => console.log(evt)
        }
      },
      gender:{
        type: "control",
        component: 
        `<div>
          <input type="radio" this value="male" name="gender" checked>Male<br/>
          <input type="radio" this value="female" name="gender" checked>Female<br/>
          {{error}}
        </div>`,
        validation: {
          controls: [Validators.required],
          errors: [{
            error: "required",
            message: "this field is required"
          }]
        }
      },
      
    }
  }
  value = {
    username: "youssef",
    fullname: "Kallel Yousser"
  }
  save(event){
    console.log(event)
  }
}
