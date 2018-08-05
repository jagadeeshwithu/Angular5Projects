import { Component, OnInit } from '@angular/core';
import { IMailItems, MailItemsListService } from './mail-items-list.service';

@Component({
  selector: 'mail-items-list',
  templateUrl: './mail-items-list.component.html',
  styleUrls: ['./mail-items-list.component.css']
})

export class MailItemsListComponent implements OnInit {

  private mailitemsdata: IMailItems;

  constructor(private mailitemsservice: MailItemsListService) { }

  ngOnInit() {

    this.getData();
  }

  getData() {
    this.mailitemsservice.getMailContent().subscribe(
      (values: IMailItems) => {
        this.mailitemsdata = values;
      }
    );
  }

}
