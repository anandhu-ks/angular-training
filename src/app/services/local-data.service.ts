import { Injectable } from '@angular/core';
import { Observable, subscribeOn } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalDataService {
  list = [];
  constructor() {}

  //Articles
  //get article list
  getArticleList() {
    return new Observable((subscribe) => {
      setTimeout(() => {
        subscribe.next(this.article_list);
        subscribe.complete();
      }, 1000);
    });
  }

  getArticleById(id: number) {
    return new Observable((subscribe) => {
      const article = this.article_list.filter((item: any) => {
        return item.id == id;
      });
      subscribe.next(article);
      subscribe.complete();
    });
  }

  //Save data to localstorage
  saveArticle(data: any) {
    return new Observable((subscribe) => {
      setTimeout(() => {
        const newList = [...this.article_list, data];
        this.article_list = newList;
        subscribe.next(newList);
        subscribe.complete();
      }, 1000);
    });
  }

  //Edit article

  updateData({ id, title, body }: any) {
    return new Observable((subscribe) => {
      setTimeout(() => {
        const updatedList = this.article_list;
        updatedList.map((item: any) => {
          if (item.id === id) {
            (item.title = title), (item.body = body);
          }
        });
        this.article_list = updatedList;
        subscribe.next(this.article_list);
        subscribe.complete();
      }, 3000);
    });
  }

  //getter to get data
  private get article_list() {
    const data = localStorage.getItem('article_list');
    if (data) {
      return JSON.parse(data);
    }
    return [];
  }

  //data setter
  private set article_list(value) {
    localStorage.setItem('article_list', JSON.stringify(value));
  }

  //User
  saveUser(data: any) {
    return new Observable((subscribe) => {
      setTimeout(() => {
        this._user = data;
        subscribe.next(data);
        subscribe.complete();
      }, 2000);
    });
  }

  //Set user
  private set _user(value) {
    localStorage.setItem('user', JSON.stringify(value));
  }

  getUser() {
    return new Observable((subscribe) => {
      const user = this._user;
      subscribe.next(user);
      subscribe.complete();
    });
  }

  setLike(id: number) {
    return new Observable((subscribe) => {
      const articles = this.article_list;
      articles.map((item: any) => {
        if (item.id == id) {
          item.likes++;
        }
      });
      this.article_list = articles;
      subscribe.next(articles);
      subscribe.complete();
    });
  }

  private get _user() {
    const user = localStorage.getItem('user');
    if (user) return JSON.parse(user);
    return '';
  }
}
