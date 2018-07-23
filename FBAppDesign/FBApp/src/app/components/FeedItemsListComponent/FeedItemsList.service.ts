import { Injectable } from "../../../../node_modules/@angular/core";
import { HttpClient } from "../../../../node_modules/@angular/common/http";

@Injectable() 
export class FeedItemsListService {

    constructor(private http: HttpClient){}

    getFeedContent(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }
}

export interface IFeedItems {
    userId: number;
    id: number;
    title: string;
    body: string;
}