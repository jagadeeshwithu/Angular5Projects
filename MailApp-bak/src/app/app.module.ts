import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MailItemsListComponent } from './Components/MailItemsList/MailItemsList.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import appRoutes from './app.routes';
import { MailItemsListService } from './Components/MailItemsList/MailItemsList.service';
import { MailItemComponent } from './Components/MailItem/MailItem.component';
import { MailItemRouteGuard } from './Common/route-guards.service';
import { ChatItemsListComponent } from './Components/ChatItemsList/ChatItemsList.component';
import { ChatItemsListService } from './Components/ChatItemsList/ChatItemsList.service';
import { ChatItemComponent } from './Components/ChatItem/ChatItem.component';


@NgModule({
  declarations: [
    AppComponent,
    MailItemsListComponent,
    MailItemComponent,
    ChatItemsListComponent,
    ChatItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    appRoutes
  ],
  providers: [
    MailItemsListService,
    ChatItemsListService,
    MailItemRouteGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
