import { Component, Input } from "../../../../node_modules/@angular/core";
import { IChatItemModel } from "../ChatItemsListComponent/ChatItemsList.service";

@Component({
    selector: 'chat-item-detail',
    templateUrl: './ChatItemDetail.component.html',
    styleUrls: ['./ChatItemDetail.component.css']
})

export class ChatItemDetailComponent {
    
    @Input() private chatItemModel: IChatItemModel;
        
    constructor(){}
}