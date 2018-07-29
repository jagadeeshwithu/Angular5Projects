import { Component } from '@angular/core';
import { WikiSearch } from './wiki-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private items: any;

  constructor(private searchservice: WikiSearch) {
  }

  search(val: string){
    this.searchservice.search(val).subscribe(
      (data: string) => {
        // console.log(data);
        this.items = data[1];
      }
    );
  }
}
