import { Component } from "../../../../node_modules/@angular/core";
import { IFeedItemData, FeedItemService } from "./FeedItem.service";
import { ActivatedRoute } from "../../../../node_modules/@angular/router";

@Component({
    selector: 'feed-item',
    templateUrl: './FeedItem.component.html',
    styleUrls: ['./FeedItem.component.css']
})

export class FeedItemComponent {

    private id: number;
    private feeditemdata: IFeedItemData;
    constructor(private feeditemservice: FeedItemService, private currentRoute: ActivatedRoute){
        this.currentRoute.params.subscribe(
            params => {
                this.id = parseInt(params['id']);
                // console.info(this.id);
                this.feeditemservice.getSingleFeedData(this.id + 1).subscribe(
                    (d: any) => {
                        this.feeditemdata = d;
                    }
                )
            }
        )

    }
}