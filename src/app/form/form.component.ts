import { Component, OnInit } from '@angular/core';
import { LocalDataService } from '../services/local-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private _local: LocalDataService) {
    //this.saveData();
    this.updateData();
  }

  ngOnInit(): void {
  }





  saveData() {
    const id = Math.floor(Math.random() * 50);
    const articleObj = {
      id: id,
      title: "Test title",
      body: "Test body"
    }
    this._local.saveArticle(articleObj).subscribe(({
      next: (res) => {
        console.log(res);
      }
    }))
  }


  updateData() {
    const updatedObj = {
      id:26,
      title: "latest update",
      body: "updated body"
    }
    this._local.updateData(updatedObj).subscribe(({
      next: (res) => {
        console.log(res);
      }
    }));
  }

}
