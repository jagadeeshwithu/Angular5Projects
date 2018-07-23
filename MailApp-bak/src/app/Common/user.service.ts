import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService{
    private API_BASE_URL: string = "https://reqres.in";

    constructor(private http: HttpClient){}

    public getSingleUserData(userId: number): Observable<any>{
        return this.http.get(this.API_BASE_URL + "/api/users/" + userId);

    }
}

export interface IUserData {
    id: number;
    fist_name: string;
    last_name: string;
    avatar: string;
}