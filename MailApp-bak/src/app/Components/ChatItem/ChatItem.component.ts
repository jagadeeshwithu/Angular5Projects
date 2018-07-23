import { Component } from "@angular/core";
import { ChatItemsListService } from "../ChatItemsList/ChatItemsList.service";

@Component({
    selector: 'mail-item',
    templateUrl: './ChatItem.component.html',
    styleUrls: ['./ChatItem.component.css'],
    providers: [ChatItemsListService]
})

export class ChatItemComponent{
    constructor(){}
}