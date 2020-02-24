import { Component, OnInit, ViewChild, ViewContainerRef, Inject, ViewRef, ElementRef, ComponentFactoryResolver, Injector, ApplicationRef, ComponentRef, Renderer2, ContentChild, TemplateRef, Output, EmbeddedViewRef, OnDestroy } from '@angular/core';
import { MatExpansionPanel, MatAccordion } from '@angular/material';
import { AbstractContainerComponent } from '../abstract-container.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-expantion-panel-container',
  templateUrl: './expantion-panel-container.component.html',
  styleUrls: ['./expantion-panel-container.component.scss']
})
export class ExpantionPanelContainerComponent extends AbstractContainerComponent implements OnInit, OnDestroy {
  @ViewChild("template", {static: false}) private template: TemplateRef<any>;
  @ViewChild("accordion", {static: true}) private accordion: ElementRef
  references : ViewRef[] = []

  constructor(private appRef: ApplicationRef, private renderer: Renderer2) {
    super();
  }

  ngOnInit() {
  }

  createPanel(title: string) : HTMLElement{
    const view = this.template.createEmbeddedView({data: {header: title}}) as EmbeddedViewRef<MatExpansionPanel>
    this.renderer.appendChild(this.accordion.nativeElement, view.rootNodes[0])
    
    this.appRef.attachView(view);
    this.references.push(view)
    
    return (view.rootNodes[0] as HTMLElement).querySelector(".mat-expansion-panel-body")
  }

  removePanel(panel: any) {
    let viewRef = panel._viewContainerRef
    const nodes = Array.prototype.slice.call(this.accordion.nativeElement.children)
    const index = nodes.indexOf(viewRef.element.nativeElement)
    this.appRef.detachView(this.references[index])
    this.references.splice(index, 1)
    viewRef.element.nativeElement.remove();
    this.panelRemoved.emit(index)
  }

  ngOnDestroy(){
    this.references.forEach(ref => {
      this.appRef.detachView(ref);
    })
    this.references = []
  }
}
