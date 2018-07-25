import { Component } from '@angular/core';
import { IMailItem, MailItemsListService } from './mail-items-list.service';

@Component({
  selector: 'mail-items-list',
  templateUrl: './mail-items-list.component.html',
  styleUrls: ['./mail-items-list.component.css'],
  providers: [MailItemsListService]
})
export class MailItemsListComponent {

  private mailitemsdata: IMailItem[];

  constructor(private mailitemsservice: MailItemsListService) {
    this.getData();
  }

  getData() {
    this.mailitemsservice.getMailContent().subscribe(
      (values: IMailItem[]) => {
        this.mailitemsdata = values;
      }
    );
  }

}
