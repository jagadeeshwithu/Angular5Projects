import { Component } from '@angular/core';
import { IMailItem, MailItemsListService } from './mail-items-list.service';
import { Observable } from '../../../../../../node_modules/rxjs';

@Component({
  selector: 'mail-items-list',
  templateUrl: './mail-items-list.component.html',
  styleUrls: ['./mail-items-list.component.css'],
  providers: [MailItemsListService]
})
export class MailItemsListComponent {

  private mailitemsdata: IMailItem[];

  private mailContentFetcherObservable: Observable<any>

  constructor(private mailitemsservice: MailItemsListService) {
    this.mailContentFetcherObservable = this.mailitemsservice.getMailContent();

    this.getData();
  }

  getData() {
    
    console.log("Hi, there!");

    this.mailContentFetcherObservable.subscribe(
      (values: IMailItem[]) => {
        this.mailitemsdata = values;
      }
    );
  }

}
