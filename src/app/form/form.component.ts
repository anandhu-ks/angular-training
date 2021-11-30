import { Component, OnInit } from '@angular/core';
import { LocalDataService } from '../services/local-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private _local: LocalDataService) {
    this.saveData();
    //this.updateData();
  }

  ngOnInit(): void {}

  saveData() {
    const id = Math.floor(Math.random() * 50);
    const articleObj = {
      id: id,
      title: 'Lifestyle Mobile App Ideas For 2022',
      body: `
      Parenting app
At the same time, apps to help raise children are an unrealistically saturated market. Parents’ needs change rapidly — children grow out of diapers, clothes, bicycles. Then it’s time to study, and again parents fork out.
Health check and meal planning app
This app checks your health on a daily basis and offers you the right nutrition that you need to stay healthy. It provides you with the many health food recipes offered by professional blogger chefs. You can customize the content delivery to suit your health. For example, if you have heart problems, an app will recommend recipes made with heart-healthy ingredients. You can partner with grocery stores to deliver healthy products right from the app.
Shopping mall navigation map
A shopping center digital navigation map stores a digital map of all shopping centers in the area and can be used to navigate the shopping center as well as show how to get there. This is especially useful for large shopping malls. The visitor can find the exact store or even check the type of a restaurant, a parking spot, or the size of the crowd in a mall using the app.
Parking space finder app
This application can help people find free parking spaces in a specific location. The app can use GPS, webcams, location, and real-time parking data to find a free parking spot whenever you need it.
Gift suggestions app
This application can view your friend’s entire social media story to suggest the best gift for your friend based on their posted content.

      `,
      author: 'Tech world',
      date: new Date(),
      likes: 0,
    };
    this._local.saveArticle(articleObj).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

  updateData() {
    const updatedObj = {
      id: 26,
      title: 'latest update',
      body: 'updated body',
    };
    this._local.updateData(updatedObj).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
