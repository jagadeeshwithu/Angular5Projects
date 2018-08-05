import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailItemsListService {

  private BASE_API_URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _http: HttpClient) { }

  getMailContent() {
    return this._http.get(this.BASE_API_URL);    
  }
}

export interface IMailItems {
  userId: number;
  id: number;
  title: string;
  body: string;
}
