import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CdnjsSearchService {

  private baseUrl: string = 'https://api.cdnjs.com/libraries';
  private queryUrl: string = '?search=';
  
  constructor(private _http: HttpClient) { }

  search(term$: Observable<string>){
    return term$.debounceTime(400).distinctUntilChanged().switchMap(
      term => this.searchEntries(term)
    );
  }

  searchEntries(term: string) {
    return this._http.get(this.baseUrl + this.queryUrl + term);
  }
}
