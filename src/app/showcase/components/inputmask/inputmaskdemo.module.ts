import { CommonModule  } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HighlightJsModule } from 'ngx-highlight-js';

import { InputMaskDemoComponent } from './inputmaskdemo.component';
import { InputMaskDemoRoutingModule } from './inputmaskdemo-routing.module';
import { InputModule } from '../../../components/input';
import { TooltipModule } from '../../../components/tooltip';

@NgModule({
  declarations: [
    InputMaskDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HighlightJsModule,
    InputMaskDemoRoutingModule,
    InputModule,
    TooltipModule
  ],
  exports: [
    InputMaskDemoComponent
  ]
})
export class InputMaskDemoModule {}
