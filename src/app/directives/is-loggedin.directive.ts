import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { LocalDataService } from '../services/local-data.service';

@Directive({
  selector: '[appIsLoggedin]',
})
export class IsLoggedinDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private _local: LocalDataService
  ) {}

  @Input() set appIsLoggedin(show: 'loggedIn' | 'notLoggedIn') {
    this._local.getUser().subscribe({
      next: (user) => {
        if (user) {
          if (show == 'loggedIn') {
            this.viewContainer.createEmbeddedView(this.templateRef);
          } else {
            this.viewContainer.clear();
          }
        } else {
          if (show == 'notLoggedIn') {
            this.viewContainer.createEmbeddedView(this.templateRef);
          } else {
            this.viewContainer.clear();
          }
        }
      },
    });
  }
}
