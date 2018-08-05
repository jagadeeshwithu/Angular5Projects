import { Component } from "@angular/core";

import { WikiSearchService } from "../../../../common/wiki-search.service";
import { Subject } from "../../../../../../node_modules/rxjs";

@Component({
    selector: 'search-box',
    templateUrl: './SearchBox.component.html',
    styleUrls: ['./SearchBox.component.css'],
    providers: [WikiSearchService]
})

export class SearchBoxComponent  {

    private items: string[];
    private term$: Subject<string> = new Subject<string>();

    constructor(private service: WikiSearchService) {
        this.service.search(this.term$).subscribe(
            results => this.items = results
        );
    }

}