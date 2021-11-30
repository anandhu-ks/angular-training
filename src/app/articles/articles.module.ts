import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [ArticlesComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    HeaderModule,
    FontAwesomeModule,
    DirectivesModule,
    PipesModule,
  ],
})
export class ArticlesModule {}
