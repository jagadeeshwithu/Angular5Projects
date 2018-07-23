import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "../../../../node_modules/rxjs/Observable";
import { IChatItemDetail } from "../ChatItemsListComponent/ChatItemsList.service";

@Injectable()
export class ChatItemService{
    private BASE_API_URL = 'https://jsonplaceholder.typicode.com/comments/';

    constructor(private http: HttpClient) {}

    getSingleChatItemDetail(id: number): Observable<IChatItemDetail> {
        
        return <Observable<IChatItemDetail>> (this.http.get(this.BASE_API_URL + (id + 1)));
    }
}