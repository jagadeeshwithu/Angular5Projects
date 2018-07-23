import { Injectable } from "../../../../node_modules/@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FeedItemService {

    private BASE_API_URL = 'https://jsonplaceholder.typicode.com/posts/';
    
    constructor(private http: HttpClient){}

    getSingleFeedData(i: number){
        return this.http.get(this.BASE_API_URL + i);
    }
}

export interface IFeedItemData {
    title: string;
    body: string;
}