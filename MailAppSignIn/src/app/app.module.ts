import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignInUserIdComponent } from './Components/SignInForms/sign-in-user-id/sign-in-user-id.component';
import { SignInPasswordComponent } from './Components/SignInForms/sign-in-password/sign-in-password.component';

import appRoutes from './app.routes';

import { MailItemsListComponent } from './Components/inbox-page/Mails/mail-items-list/mail-items-list.component';
import { MailItemComponent } from './Components/inbox-page/Mails/mail-item/mail-item.component';
import { NavItemsListComponent } from './Components/inbox-page/nav-items-list/nav-items-list.component';
import { HeaderBarComponent } from './Components/inbox-page/header-bar/header-bar.component';
import { MailItemsListService } from './Components/inbox-page/Mails/mail-items-list/mail-items-list.service';
import { MailItemService } from './Components/inbox-page/Mails/mail-item/mail-item.service';
import { InboxPageComponent } from './Components/inbox-page/inbox-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInUserIdComponent,
    SignInPasswordComponent,
    MailItemsListComponent,
    MailItemComponent,
    NavItemsListComponent,
    HeaderBarComponent,
    InboxPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    appRoutes
  ],
  providers: [
    MailItemsListService,
    MailItemService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
