import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MailItemService {
    private API_BASE_URL: string = "https://jsonplaceholder.typicode.com/posts/";

    constructor(private http: HttpClient){}

    getSingleUserData(id: number) {
        // private currId: number = id++;

        console.log(this.API_BASE_URL + id);
        return this.http.get(this.API_BASE_URL + id);
    }
}