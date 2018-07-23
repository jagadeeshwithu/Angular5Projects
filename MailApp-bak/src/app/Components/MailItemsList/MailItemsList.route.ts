import { Route } from "@angular/compiler/src/core";
import { MailItemsListComponent } from "./MailItemsList.component";

export const MailItemsListRoute: Route = <Route>{
    path: 'mails',
    component: MailItemsListComponent
}