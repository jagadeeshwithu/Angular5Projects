import { Route } from "@angular/compiler/src/core";
import { MailItemsListComponent } from "./MailItemsList.component";

export const MailItemsListEmptyRoute: Route = <Route> {
    path: '',
    component: MailItemsListComponent
    // outlet: 'mailitemsoutlet'
};

export const MailItemsListRoute: Route = <Route> {
    path: 'inbox/mails',
    component: MailItemsListComponent
    // outlet: 'mailitemsoutlet'
};