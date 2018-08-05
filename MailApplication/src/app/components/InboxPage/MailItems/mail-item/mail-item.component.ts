import { Component, OnInit } from '@angular/core';
import { IMailItems } from '../mail-items-list/mail-items-list.service';
import { MailItemService } from './mail-item.service';
import { ActivatedRoute } from '../../../../../../node_modules/@angular/router';

@Component({
  selector: 'mail-item',
  templateUrl: './mail-item.component.html',
  styleUrls: ['./mail-item.component.css']
})
export class MailItemComponent implements OnInit {

  private id: number;
  private userData: IMailItems;

  constructor(private mailitemsservice: MailItemService, private currentRoute: ActivatedRoute) { 
    this.currentRoute.params.subscribe(
      params => {
        this.id = parseInt(params['id']);
        this.mailitemsservice.getSingleUserData(this.id + 1).subscribe(
          (data: any) => {
            this.userData = data;
          }
        );
      }
    );
  }

  ngOnInit() {
  }

}
