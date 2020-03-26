import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointService } from './services/breakpoint.service';
import {PopupDirective} from './directives/popup.directive';



@NgModule({
  declarations: [PopupDirective],
  imports: [
    CommonModule
  ],
  exports: [PopupDirective],
  providers: [
    BreakpointService
  ]
})
export class SharedModule { }
