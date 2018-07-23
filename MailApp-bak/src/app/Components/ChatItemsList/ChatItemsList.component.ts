import { Component } from "@angular/core";

import { IChatItems, ChatItemsListService } from "./ChatItemsList.service";

@Component({
    selector: 'chat-items',
    templateUrl: './ChatItemsList.component.html',
    styleUrls: ['./ChatItemsList.component.css']
})

export class ChatItemsListComponent{
    private chatData: IChatItems;

    constructor(public chatitemsservice: ChatItemsListService){
        this.getChatData();
        
    }

    getChatData(){
        this.chatitemsservice.getChatContent().subscribe((values: IChatItems) => {
                                     this.chatData = values;                                     
                                 }
                             )
    }

    
}