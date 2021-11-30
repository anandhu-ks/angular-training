import { Component, OnInit } from '@angular/core';
import { LocalDataService } from '../services/local-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private _local: LocalDataService) {
   
  }

  ngOnInit(): void {}

  logUser() {
    const userObj = {
      name: 'Editor',
      role: 1,
      liked: true,
    };

    this._local.saveUser(userObj).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
