import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/HeaderComponent/header.component';
import { NavItemsListComponent } from './components/NavItemsList/NavItemsList.component';
import { FeedItemsListService } from './components/FeedItemsListComponent/FeedItemsList.service';
import { FeedItemsListComponent } from './components/FeedItemsListComponent/FeedItemsList.component';
import appRoutes from './app.routes';
import { StoriesListandYourPagesListComponent } from './components/StoriesListandYourPagesListComponent/StoriesListandYourPagesList.component';
import { FeedItemComponent } from './components/FeedItemComponent/FeedItem.component';
import { FeedItemRouteGuard } from './common/route-guards.service';
import { FeedItemService } from './components/FeedItemComponent/FeedItem.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavItemsListComponent,
    FeedItemsListComponent,
    FeedItemComponent,
    StoriesListandYourPagesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    appRoutes
  ],
  providers: [
    FeedItemsListService,
    FeedItemService,
    FeedItemRouteGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
