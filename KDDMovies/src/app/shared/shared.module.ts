import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgDefinitionsComponent } from './components/svg-definitions/svg-definitions.component';
import { IconComponent } from './components/icon/icon.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SvgDefinitionsComponent, IconComponent, ButtonComponent],
  exports: [SvgDefinitionsComponent, IconComponent, ButtonComponent]
})
export class SharedModule { }
