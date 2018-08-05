import { Route } from "../../../../../../node_modules/@angular/router";
import { MailItemsListComponent } from "./mail-items-list.component";

export const MailItemsListRoute: Route = <Route> {
    path: 'mails',
    component: MailItemsListComponent
}