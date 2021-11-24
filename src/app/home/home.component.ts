import { Component, OnInit } from '@angular/core';
import { LocalDataService } from '../services/local-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _local: LocalDataService
  ) {
    this.getList();
  }

  ngOnInit(): void {
  }


  getList() {
    this._local.getArticleList().subscribe(({
      next: (res) => {
        console.log(res);
      }
    }));
  }

}
