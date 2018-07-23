import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "../../../../node_modules/rxjs/Observable";

@Injectable()
export class ChatItemsListService{
    constructor(private http: HttpClient){}

    getChatContent(): Observable<IChatItemModel[]> {
        return <Observable<IChatItemModel[]>> this.http.get('https://jsonplaceholder.typicode.com/comments');
    }
}

export interface IChatItemModel {
    email: string;
    name: string;
}

export interface IChatItemDetail {
    email: string;
    name: string;
    body: string;
}
