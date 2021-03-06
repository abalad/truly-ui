import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HighlightJsModule } from 'ngx-highlight-js';

import { DropDownListDemoComponent } from './dropdownlistdemo.component';
import { DropDownListDemoRoutingModule } from './dropdownlistdemo-routing.module';
import { DropDownListModule } from '../../../components/dropdownlist';

@NgModule({
  declarations: [
    DropDownListDemoComponent
  ],
  imports: [
    DropDownListDemoRoutingModule,
    DropDownListModule,
    CommonModule,
    FormsModule,
    HighlightJsModule
  ],
  exports: [
    DropDownListDemoComponent
  ]
})
export class DropDownListDemoModule { }
