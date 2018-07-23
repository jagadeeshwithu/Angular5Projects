import { Component } from "@angular/core";
import { IMailItems } from "../MailItemsListComponent/MailItemsList.service";
import { MailItemService } from './MailItem.service';
import { ActivatedRoute } from "../../../../node_modules/@angular/router";

@Component({
    selector: 'mail-item',
    templateUrl: './MailItem.component.html',
    styleUrls: ['./MailItem.component.css'],
    
})

export class MailItemComponent {
    private id: number;
    private userData: IMailItems;

    constructor(private mailitemService: MailItemService, private currentRoute: ActivatedRoute){
        this.currentRoute.params.subscribe(
            params => {
                this.id = parseInt(params['id']);
                this.mailitemService.getSingleUserData(this.id + 1).subscribe(
                    (data: any) => {
                        this.userData = data;
                    }
                )
            }
        )
    }
}