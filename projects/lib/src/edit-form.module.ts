import { NgModule } from '@angular/core';
import { EditFormComponent, FormActions, FormHeader, FormContent } from './edit-form.component';
import { ExpantionPanelContainerComponent } from './containers/expantion-panel-container/expantion-panel-container.component';
import {  SelectField, FileField, AutocompleteField, InputField } from './fields/public_api';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatExpansionModule, MatButtonModule, MatCardModule, MatSelectModule, MatAutocompleteModule, MatIconModule, MatExpansionPanel, MatExpansionPanelHeader } from '@angular/material';




@NgModule({
  declarations: [EditFormComponent, ExpantionPanelContainerComponent, InputField, SelectField, FileField, FormActions, FormHeader, FormContent, AutocompleteField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatIconModule
  ],

  exports: [
    EditFormComponent, 
    FormActions, 
    FormHeader, 
    FormContent,
    InputField,
    SelectField,
    FileField,
    AutocompleteField
  ],
  entryComponents:[MatExpansionPanel, MatExpansionPanelHeader, ExpantionPanelContainerComponent ]
})
export class EditFormModule { }
