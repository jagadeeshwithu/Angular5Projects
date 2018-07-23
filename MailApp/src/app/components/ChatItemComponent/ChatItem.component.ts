import { Component, Input, OnInit } from "@angular/core";
import { IChatItemModel, IChatItemDetail } from "../ChatItemsListComponent/ChatItemsList.service";
import { ChatItemService } from "./ChatItem.service";

@Component({
    selector: 'chat-item',
    templateUrl: './ChatItem.component.html',
    styleUrls: ['./ChatItem.component.css'],
    providers: [ChatItemService]
})

export class ChatItemComponent implements OnInit{
    
    private chatItemDetail: IChatItemDetail;
    private isVisible: boolean = false;

    @Input() private idVal: number;
    @Input() private chatItemModel: IChatItemModel;

    constructor(private chatitemservice: ChatItemService){}

    showDetails(event: MouseEvent) {
        this.isVisible = !this.isVisible;
        
    }

    ngOnInit() {

        this.chatitemservice.getSingleChatItemDetail(this.idVal).subscribe(
            (data: any) => {
                this.chatItemDetail = data;
                // console.info(this.chatItem.name? this.chatItem.name : 'not assigned chat data');
            }
        );
    }
}