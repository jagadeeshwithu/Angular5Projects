import { Component } from '@angular/core';
import { IMailItem } from '../mail-items-list/mail-items-list.service';
import { MailItemService } from './mail-item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mail-item',
  templateUrl: './mail-item.component.html',
  styleUrls: ['./mail-item.component.css']
})
export class MailItemComponent {

  private mailData: IMailItem;
  private id: number;

  constructor(
    private mailitemservice: MailItemService,
    private currentRoute: ActivatedRoute
  ) 
  {
    this.currentRoute.params.subscribe(
      params => {
        this.id = parseInt(params['id']);
        this.mailitemservice.getSingleMailItem(this.id + 1).subscribe(
          (data: any) => {
            this.mailData = data;
          }
        );
      }
    );
  }


}
