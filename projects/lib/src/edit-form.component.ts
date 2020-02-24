import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit, Injector, ReflectiveInjector, ElementRef, EmbeddedViewRef, Inject, Renderer2, ApplicationRef, ComponentRef, OnDestroy, OnChanges, Input, TemplateRef, ViewRef, EventEmitter, Output, Directive, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { InputField } from './fields/input-field/input-field.component';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, FormControlName, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormConfig, FieldConfig } from './form-config';
import { ObjectUnsubscribedError, Observable, isObservable, of, merge, Subscription, fromEvent } from 'rxjs';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatFormFieldControl, MatFormField, MatButton, MatCard } from '@angular/material';
import { ExpantionPanelContainerComponent } from './containers/expantion-panel-container/expantion-panel-container.component';
import { AbstractContainerComponent } from './containers/abstract-container.component';


@Component({
  selector: 'mat-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
  exportAs: "editForm"
})
export class EditFormComponent implements OnDestroy, AfterViewInit {

  formGroup: FormGroup


  container: ElementRef;

  @ViewChild('container', null) set content(content: ElementRef) {
    this.container = content;
    if (this.container) {

      this.containerReady = true;
      this.init();
    }
  }
  @ViewChild('cardGroup', { read: TemplateRef, static: true }) cardGroup: TemplateRef<any>;


  @ContentChildren(TemplateRef) set template(template: QueryList<TemplateRef<any>>) {
    debugger;
  }

  ngAfterViewInit() {
  }

  _value
  _formConfig: FormConfig
  title
  setFromSelf = false;
  domParser = new DOMParser();

  @Output()
  valueChange: EventEmitter<any> = new EventEmitter();
  @Output()
  save: EventEmitter<any> = new EventEmitter();
  @Output()
  cancel: EventEmitter<any> = new EventEmitter();

  defaultAction = "true"

  @Input()
  get value() {
    return this._value
  }

  set value(value) {
    if (this.setFromSelf) {
      this.setFromSelf = false;
      return;
    }
    this._value = value
    if (this.formGroup) {
      this.updateValue()
    }
  }

  @Input()
  get formConfig() {
    return this._formConfig
  }

  set formConfig(formConfig) {
    this._formConfig = formConfig
    if (this._formConfig) {
      if (this._formConfig.fields) {
        let section = {
          sectionClass: "default_section",
          fields: this._formConfig.fields
        }
        this._formConfig.sections = [section, ...this._formConfig.sections]
      }
      this.formGroup = this.formBuilder.group(this.buildControl(this._formConfig) as FormGroup)
    }
    setTimeout(() => {

      this.init()
    }, 100)
  }

  componentRefs: ComponentRef<any>[] = []
  viewRefs: ViewRef[] = []
  formChangeSubscription: Subscription;
  containerReady = false;
  eventSubscriptions: Subscription[] = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private formBuilder: FormBuilder,
    private injector: Injector,
    private rendrer: Renderer2,
    private appRef: ApplicationRef
  ) {
    //this.formGroup = this.formBuilder.group({})
  }

  submitForm() {
    this.save.emit(this.formGroup.value);
  }

  onCancel() {
    this.cancel.emit();
  }



  checkValueForm(formGroup: FormGroup, formConfig: FormConfig, value: any) {
    Object.keys(value).forEach(key => {
      if (Array.isArray(value[key])) {
        if (!formConfig.sections || !formConfig.sections.length)
          return;

        formConfig.sections.forEach(section => {
          if (!section.fields[key] || section.fields[key].type === "control")
            return;
          const config: FormConfig = section.fields[key].config
          let formArray: FormArray = this.formBuilder.array([])

          formGroup.setControl(key, formArray);

          for (var i = 0; i < value[key].length; i++) {
            const control = this.buildControl(config) as FormGroup
            formArray.push(this.formBuilder.group(control))
            this.checkValueForm(control, config, value[key])
          }
        })

      }
    })
  }

  buildControl(formConfig: FormConfig): FormGroup | FormArray | FormControl {
    let control: any = {}
    formConfig.sections.forEach(section => {
      Object.keys(section.fields).forEach(key => {
        const config = section.fields[key]
        var validations = section.fields[key].validation
        if (config.type === "control") {
          control[key] = [null, validations && validations.controls ? validations.controls : []]

        } else if (config.type === "array") {
          control[key] = this.formBuilder.array([])
        } else {
          control[key] = this.formBuilder.group(this.buildControl(config.config), { validations: formConfig.validators })
        }

      })
    })

    return control;
  }

  init() {
    if (this.formConfig && this.containerReady) {
      this.ngOnDestroy();
      (this.container.nativeElement as HTMLElement).innerHTML = ""

      //this.initElement(this.formConfig, this.container.nativeElement, this.formGroup)
      this.title = this.formConfig.title
      this.createForm(this.formConfig, this.container.nativeElement, this.formGroup)

      if (this.value) {
        this.checkValueForm(this.formGroup, this.formConfig, this.value);
      }
      this.updateValue()

      this.formChangeSubscription = this.formGroup.valueChanges.subscribe(change => {
        this._value = this.formGroup.value
        this.valueChange.emit(this.value)
        this.setFromSelf = true;
      });
    }

  }

  updateValue() {
    if (this.value) {
      this.clean(this.value, this.formGroup)
      this.fill(this.value, this.formGroup)
      this.formGroup.setValue(this.value)
    }
  }

  clean(value, group: FormGroup) {
    if (typeof (value) === "object") {
      Object.keys(value).forEach(key => {
        if (group instanceof FormGroup && Object.keys(group.value).indexOf(key) < 0) {
          delete value[key]
        } else if (group.controls[key] instanceof FormGroup) {
          this.clean(value[key], group.controls[key] as FormGroup)
        }
      })
    }
  }

  fill(value, group: FormGroup) {
    if (group.value != null && typeof (group.value) === "object") {
      Object.keys(group.value).forEach(key => {
        if (typeof (value[key]) === "undefined") {
          value[key] = group.value[key]
        } else {
          if (typeof (value[key]) === "object" && group.controls[key] instanceof FormGroup) {
            this.fill(value[key], group.controls[key] as FormGroup)
          }
        }
      })
    }
  }

  initElement(formConfig: FormConfig, element: HTMLElement, formGroup?: FormGroup) {

    if (formConfig.class && formConfig.class.length) {
      if (formConfig.class && formConfig.class.length) {
        formConfig.class.forEach(_class => {

          this.rendrer.addClass(element, _class)
        })
      }
    }
    if (formConfig.title) {
      var titleElement = this.rendrer.createElement("h1");
      var title;
      if (typeof (formConfig.title) === "function") {
        title = formConfig.title(formGroup.value)
      } else {
        title = formConfig.title;
      }
      var titleText = this.rendrer.createText(title)
      this.rendrer.appendChild(titleElement, titleText)
      this.rendrer.appendChild(element, titleElement)
    }
  }

  createForm(formConfig: FormConfig, container: HTMLElement, formGroup: FormGroup) {
    formConfig.sections.forEach(section => {

      const parentElement = this.rendrer.createElement('div');
      this.rendrer.appendChild(container, parentElement)
      this.rendrer.addClass(parentElement, section.sectionClass)

      Object.keys(section.fields).forEach(key => {



        const form = section.fields[key]
        if (form.type === "control") {
          this.createControlForm(formConfig, form, formGroup.get(key) as FormControl, parentElement, key);
        } else if (form.type === "group" || form.type === "array") {
          var panel;
          const ctx: any = {
            data: {

              title: form.groupTitle,
              click: () => {
                this.onAddItem(form.config, formGroup.get(key) as FormArray, panel.instance)
              }
            }
          }


          // create add button in case of array
          if (form.type === "array") {
            ctx.data.showAdd = true;
          }
          const view = this.cardGroup.createEmbeddedView(ctx) as EmbeddedViewRef<MatCard>
          this.appRef.attachView(view);
          var element = view.rootNodes[0]
          this.rendrer.appendChild(parentElement, element);
          element = element.querySelector(".edit-form-group-content")

          if (form.type === "group") {
            this.createForm(form.config, element, formGroup.get(key) as FormGroup)
            //this.createNewPanel(form.config, formGroup.get(key) as FormGroup, panel.instance)
          } else {
            panel = this.componentFactoryResolver.resolveComponentFactory(ExpantionPanelContainerComponent).create(this.injector);


            const panelNode: HTMLElement = (panel.hostView as EmbeddedViewRef<any>).rootNodes[0];

            this.appRef.attachView(panel.hostView)
            this.rendrer.appendChild(element, panelNode)

            this.componentRefs.push(panel)
            panel.instance.attached.subscribe(evt => {

              const formArray = formGroup.get(key) as FormArray
              panel.instance.displayRemove = true
              for (var i = 0; i < formArray.length; i++) {
                this.createNewPanel(form.config, formArray.at(i) as FormGroup, panel.instance)
              }
            })

            panel.instance.panelRemoved.subscribe(index => {
              const formArray = formGroup.get(key) as FormArray
              formArray.removeAt(index);
            })
          }



        }
      })
    })

  }

  onAddItem = (formConfig: FormConfig, formArray: FormArray, container: AbstractContainerComponent) => {
    let group = this.formBuilder.group(this.buildControl(formConfig))
    formArray.push(group)
    this.createNewPanel(formConfig, group as FormGroup, container);

  }

  private createControlForm(formConfig: FormConfig, form: FieldConfig, formControl: FormControl, parentElement: HTMLElement, fieldName: string) {
    if (!form.component)
      return;

    if (typeof (form.component) === "string") {
      this.createNativeElement(form, formControl, parentElement, fieldName);
      return;
    }
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(form.component as any);

    const useValue: any = {
      formControl: formControl,
      attributes: form.attributes,
      events: form.events,
      errors: form.validation ? form.validation.errors : [],
      class: form.fieldClass
    }


    var injector = Injector.create([
      {
        provide: "FIELD_DATA",
        useValue
      }
    ]);


    const ref = componentFactory.create(injector)
    this.appRef.attachView(ref.hostView);
    //this.container.insert(ref.hostView)

    //const elementContainer = this.rendrer.createElement('div')
    this.rendrer.appendChild(parentElement, (ref.hostView as EmbeddedViewRef<any>).rootNodes[0]);

    //this.rendrer.appendChild(parentElement, elementContainer);
    ref.changeDetectorRef.detectChanges()
    this.componentRefs.push(ref)
  }
  createNativeElement(form: FieldConfig, formControl: FormControl, parentElement: HTMLElement, fieldName: string) {
    var component = this.domParser.parseFromString(form.component as string, "text/html").firstElementChild.querySelector("body").firstElementChild;
    if(!component){
      return;
    }
    let elements : Element[] = Array.from(component.querySelectorAll("[this]"))
    if(elements.length === 0){
      elements = [component]
    }
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i] as HTMLElement
      for (let att in form.attributes) {
        if (att === "content")
          continue;
        element[att] = form.attributes[att];
        if (form.fieldClass && form.fieldClass.length > 0) {
          form.fieldClass.forEach(c => this.rendrer.addClass(element, c))
        }
      }
      for (let ev in form.events) {
        this.eventSubscriptions.push(fromEvent(element, ev).subscribe(event => form.events[ev](event)))
      }
      this.eventSubscriptions.push(fromEvent(element, "change").subscribe(event => formControl.setValue((event.target as any).value)))
      debugger;
      if(element instanceof HTMLInputElement && element.type === "radio" && element.attributes["checked"]){
        formControl.setValue((element as any).value)
      }else if(element instanceof HTMLInputElement && element.type === "checkbox" && element.attributes["checked"]){
        formControl.setValue(true)
      }else if(["radio", "checkbox"].indexOf((element as any).type) < 0){
        formControl.setValue((element as any).value)
      }
      
    }
    HTMLInputElement
    this.rendrer.appendChild(parentElement, component);

  }

  createNewPanel(config: FormConfig, formGroup: FormGroup, container: AbstractContainerComponent) {
    var title;
    if (typeof (config.title) === "function") {
      title = config.title(formGroup.value)
    } else {
      title = config.title
    }
    const element = container.createPanel(title);
    if (config.class && config.class.length) {
      config.class.forEach(_class => {
        this.rendrer.addClass(element, _class);
      })
    }
    this.createForm(config, element, formGroup)
  }

  valid() {
    return this.formGroup && this.formGroup.valid
  }

  ngOnDestroy() {
    if (this.formChangeSubscription) {
      this.formChangeSubscription.unsubscribe();
    }
    this.componentRefs.forEach(ref => {
      this.appRef.detachView(ref.hostView)
      ref.changeDetectorRef.detach()
    })
    this.viewRefs.forEach(ref => {
      this.appRef.detachView(ref);
    })
    if (this.eventSubscriptions) {
      this.eventSubscriptions.forEach(s => s.unsubscribe);
      this.eventSubscriptions = []
    }
    this.componentRefs = []
    this.viewRefs = []
  }

}

@Directive({
  selector: "edit-form-actions"
})
export class FormActions {

}

@Directive({
  selector: "edit-form-header"
})
export class FormHeader {

}

@Directive({
  selector: "form-content"
})
export class FormContent {


}


