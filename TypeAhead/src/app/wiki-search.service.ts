import { Injectable } from "../../node_modules/@angular/core";
import { HttpClient } from "../../node_modules/@angular/common/http";

@Injectable()
export class WikiSearch {
    
    private API_URL: string;
    constructor(private _http: HttpClient){}
    
    search(keyword: string) {
        this.API_URL = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + keyword + '&limit=10&namespace=0&format=json';

        return this._http.get(this.API_URL);

    }
}