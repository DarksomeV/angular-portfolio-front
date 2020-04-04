import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointService } from './services/breakpoint.service';
import { PopupDirective } from './directives/popup.directive';
import { LocaleService } from './services/locale.service';



@NgModule({
  declarations: [PopupDirective],
  imports: [
    CommonModule
  ],
  exports: [
    PopupDirective
  ],
  providers: [
    BreakpointService,
    LocaleService
  ]
})
export class SharedModule { }
