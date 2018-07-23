import { Component } from "@angular/core";
import { MailItemsListService, IMailItems } from "./MailItemsList.service";

@Component({
    selector: 'mail-items',
    templateUrl: './MailItemsList.component.html',
    styleUrls: ['./MailItemsList.component.css'],
    providers: [MailItemsListService]
})

export class MailItemsListComponent{

    private mailitemsdata: IMailItems;

    constructor(public mailitemsservice: MailItemsListService){
        this.getData();
    }

    getData(){
        this.mailitemsservice.getMailContent().subscribe(
            (values: IMailItems) => {
                this.mailitemsdata = values;
            }
        )

    }

}