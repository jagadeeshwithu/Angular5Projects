import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable() 
export class MailItemService {

    private BASE_API_URL: string = 'https://jsonplaceholder.typicode.com/posts/';

    constructor(private _http: HttpClient) {}

    getSingleUserData(id: number) {
        return this._http.get(this.BASE_API_URL + id);
    }
}