import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WikiSearch } from './wiki-search.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { ResultComponent } from './components/result-component/result-component.component';
import appRoute from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    appRoute
  ],
  providers: [WikiSearch],
  bootstrap: [AppComponent]
})
export class AppModule { }
