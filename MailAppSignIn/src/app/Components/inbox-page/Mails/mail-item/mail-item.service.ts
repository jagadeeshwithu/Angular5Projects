import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MailItemService {
    private BASE_API_URL = 'https://jsonplaceholder.typicode.com/posts/';

    constructor(private http: HttpClient){}

    getSingleMailItem(id: number) {
        return this.http.get(this.BASE_API_URL + id);
    }
}