import { Component } from '@angular/core';
import { MailItemsListComponent } from './Components/MailItemsList/MailItemsList.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MailItemsListComponent]
})
export class AppComponent {
  title = 'WH MAil app';
}
