import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { HeaderModule } from '../header/header.module';






@NgModule({
  declarations: [
    ArticlesComponent,

  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    HeaderModule
  ],

})
export class ArticlesModule { }
