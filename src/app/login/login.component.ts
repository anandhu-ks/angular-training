import { Component, OnInit } from '@angular/core';
import { LocalDataService } from '../services/local-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _local: LocalDataService) {
    this.logUser();
  }

  ngOnInit(): void {
  }



  logUser() {
    const userObj = {
      name: "admin",
      role: "1"
    }

    this._local.saveUser(userObj).subscribe(({
      next: (res) => {
        console.log(res);

      }
    }));
  }
}
