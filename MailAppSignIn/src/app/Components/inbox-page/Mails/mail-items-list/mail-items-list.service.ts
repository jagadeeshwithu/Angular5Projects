import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "../../../../../../node_modules/rxjs";

@Injectable()
export class MailItemsListService {
    
    
    constructor(private http: HttpClient){}

    getMailContent(): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }
}

export interface IMailItem {
    id: number;
    title: string;
    body: string;
}