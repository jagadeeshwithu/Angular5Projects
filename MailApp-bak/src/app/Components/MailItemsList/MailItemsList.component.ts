import { Component } from "@angular/core";
import { IMailItems, MailItemsListService } from "./MailItemsList.service";

@Component({
    selector: 'mail-items',
    styleUrls: ['./MailItemsList.component.css'],
    templateUrl: './MailItemsList.component.html',

})

export class MailItemsListComponent{
    private MailData: IMailItems;

    constructor(public mailitemservice: MailItemsListService){
        this.getData();
    }

    getData(){
        this.mailitemservice.getMailContent()
                            .subscribe((values: IMailItems) => {
                                this.MailData = values;
                            });
    }
}