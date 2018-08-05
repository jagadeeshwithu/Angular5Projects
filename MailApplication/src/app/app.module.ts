import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './components/InboxPage/HeaderBar/HeaderBar.component';
import { SearchBoxComponent } from './components/InboxPage/HeaderBar/SearchBox/SearchBox.component';
import { ReactiveFormsModule, FormsModule } from '../../node_modules/@angular/forms';
import { JsonpModule } from '../../node_modules/@angular/http';
import { MailItemsListComponent } from './components/InboxPage/MailItems/mail-items-list/mail-items-list.component';
import { NavItemsListComponent } from './components/InboxPage/NavItemsListandChatItemsList/nav-items-list/nav-items-list.component';
import { ChatItemsListComponent } from './components/InboxPage/NavItemsListandChatItemsList/chat-items-list/chat-items-list.component';
import { InboxPageComponent } from './components/InboxPage/InboxPage.component';
import { MailItemComponent } from './components/InboxPage/MailItems/mail-item/mail-item.component';
import { MailItemsListService } from './components/InboxPage/MailItems/mail-items-list/mail-items-list.service';
import { MailItemService } from './components/InboxPage/MailItems/mail-item/mail-item.service';
import { RemoveLineBreaksPipe } from './common/remove-line-breaks.pipe';
import InboxPageRoutes from './components/InboxPage/InboxPage.routes';
import appRoute from './app.route';


@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    SearchBoxComponent,
    MailItemsListComponent,
    NavItemsListComponent,
    ChatItemsListComponent,
    InboxPageComponent,
    MailItemComponent,
    RemoveLineBreaksPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    JsonpModule,
    RouterModule,
    InboxPageRoutes
  ],
  providers: [
    MailItemsListService,
    MailItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
