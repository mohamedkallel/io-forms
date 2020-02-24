import { NgModule } from '@angular/core';
import { IoFormComponent } from './io-form.component';
import { IoFormGroupComponent } from './io-form-group/io-form-group.component';
import { IoFormControlComponent } from './io-form-control/io-form-control.component';
import { IoFormArrayComponent } from './io-form-array/io-form-array.component';



@NgModule({
  declarations: [IoFormComponent, IoFormGroupComponent, IoFormControlComponent, IoFormArrayComponent],
  imports: [
  ],
  exports: [IoFormComponent]
})
export class IoFormModule { }
