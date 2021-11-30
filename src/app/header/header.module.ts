import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

import { RouterModule } from '@angular/router';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, DirectivesModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
