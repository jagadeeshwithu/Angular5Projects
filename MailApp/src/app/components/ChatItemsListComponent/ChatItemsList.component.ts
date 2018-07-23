import { Component, ViewChildren } from "@angular/core";
import { IChatItemModel, ChatItemsListService } from "./ChatItemsList.service";

@Component({
    selector: 'chat-items',
    templateUrl: './ChatItemsList.component.html',
    styleUrls: ['./ChatItemsList.component.css'],
    providers: [ChatItemsListService]
})

export class ChatItemsListComponent {

    private chatdata: IChatItemModel[];

    constructor(public chatitemservice: ChatItemsListService){
        this.retrieveChatData();
    }

    retrieveChatData(){
        this.chatitemservice.getChatContent().subscribe(
            (vals: IChatItemModel[]) => {
                this.chatdata = vals;
            }
        );
        
    }
}