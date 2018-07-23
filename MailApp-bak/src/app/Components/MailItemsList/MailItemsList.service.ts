import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MailItemsListService {
    constructor(private http: HttpClient){}

    getMailContent(){
        return this.http.get("https://jsonplaceholder.typicode.com/posts/1/comments");
    }
}

export interface IMailItems {
    name: string;
    email: string;
    body: string;
}