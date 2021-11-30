import { Component, OnInit } from '@angular/core';
import { LocalDataService } from '../services/local-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private _local: LocalDataService) {
  }

  ngOnInit(): void {}


}
