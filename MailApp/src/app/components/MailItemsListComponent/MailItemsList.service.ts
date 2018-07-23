import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MailItemsListService{
    constructor(private http: HttpClient){}

    getMailContent(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }
}

export interface IMailItems {
    userId: number;
    id: number;
    title: string;
    body: string;
}