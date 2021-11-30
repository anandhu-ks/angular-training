import { Component, OnInit } from '@angular/core';
import { LocalDataService } from '../services/local-data.service';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  faLike = faThumbsUp;
  user: string = '';
  //public likes: any;

  public article: any;

  constructor(
    private _local: LocalDataService,
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.params.subscribe((res: any) => {
      _local.getArticleById(res.id).subscribe({
        next: (article: any) => {
          if (article) {
            this.article = article[0];
            // this.likes = article[0].likes;
          }
        },
      });
    });
  }

  ngOnInit(): void {}

  togglelike() {
    this._local.setLike(this.article.id).subscribe({
      next: () => {
        this.article.likes++;
      },
    });
  }
}
