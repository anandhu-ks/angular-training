import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsLoggedinDirective } from './is-loggedin.directive';



@NgModule({
  declarations: [
    IsLoggedinDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    IsLoggedinDirective
  ]
})
export class DirectivesModule { }
