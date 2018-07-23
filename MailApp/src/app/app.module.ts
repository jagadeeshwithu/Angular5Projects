import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MailItemsListComponent } from './components/MailItemsListComponent/MailItemsList.component';
import { MailItemsListService } from './components/MailItemsListComponent/MailItemsList.service';
import { RouterModule } from '@angular/router';
import appRoutes from './app.routes';
import { NavListComponent } from './components/NavListComponent/NavList.component';
import { MailItemComponent } from './components/MailItemComponent/MailItem.component';
import { MailItemService } from './components/MailItemComponent/MailItem.service';
import { MailItemRouteGuard } from './common/route-guards.service';
import { ChatItemsListService } from './components/ChatItemsListComponent/ChatItemsList.service';
import { ChatItemsListComponent } from './components/ChatItemsListComponent/ChatItemsList.component';
import { ChatItemComponent } from './components/ChatItemComponent/ChatItem.component';
import { ChatItemService } from './components/ChatItemComponent/ChatItem.service';
import { ChatItemDetailComponent } from './components/ChatItemDetailComponent/ChatItemDetail.component';


@NgModule({
  declarations: [
    AppComponent,
    MailItemsListComponent,
    MailItemComponent,
    NavListComponent,
    ChatItemsListComponent,
    ChatItemComponent,
    ChatItemDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    appRoutes
  ],
  providers: [
    MailItemsListService,
    MailItemService,
    ChatItemsListService,
    ChatItemService,
    MailItemRouteGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
