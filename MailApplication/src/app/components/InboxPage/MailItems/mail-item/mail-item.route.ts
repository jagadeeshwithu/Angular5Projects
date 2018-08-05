import { Route } from "@angular/router";
import { MailItemComponent } from "./mail-item.component";

export const MailItemRoute: Route = <Route> {
    path: 'mails/:id',
    component: MailItemComponent
}