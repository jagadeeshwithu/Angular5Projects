import { Component } from "@angular/core";
import { IFeedItems, FeedItemsListService } from "./FeedItemsList.service";

@Component({
    selector: 'feed-items-list',
    templateUrl: './FeedItemsList.component.html',
    styleUrls: ['./FeedItemsList.component.css'],
    providers: [FeedItemsListService]
})

export class FeedItemsListComponent {

    private feeditemsdata: IFeedItems;
    
    constructor(public feeditemslistservice: FeedItemsListService){
        this.retrieveData();
    }

    retrieveData(){
        this.feeditemslistservice.getFeedContent().subscribe(
            (values: IFeedItems) => {
                this.feeditemsdata = values;
            }
        );
    }

}