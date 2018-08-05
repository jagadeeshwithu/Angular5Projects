import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikiSearchService {

  constructor(private jsonp: Jsonp) {}

  search(terms: Observable<string>, debounceMs = 400) {
    return terms.debounceTime(debounceMs).distinctUntilChanged().switchMap(
      term => this.rawsearch(term)
    );
  }

  rawsearch(term: string) {
    let search = new URLSearchParams();
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');

    return this.jsonp.get('https://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', {search}).map(
      response => response.json()[1]
    );
  }

}
