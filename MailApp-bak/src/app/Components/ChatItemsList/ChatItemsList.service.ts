import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ChatItemsListService {

    constructor(private http: HttpClient){}

    getChatContent(){
        return this.http.get("https://jsonplaceholder.typicode.com/posts/1/comments");
    }

}

export interface IChatItems {
    name: string;
    email: string;
    body: string;
}