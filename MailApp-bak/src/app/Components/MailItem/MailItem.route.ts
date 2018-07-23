import { Route } from "@angular/router";
import { MailItemComponent } from "./MailItem.component";
import { MailItemRouteGuard } from "../../Common/route-guards.service";

export const MailItemRoute: Route = <Route>{
    path: 'mails/:id',
    component: MailItemComponent,
    canActivate: [MailItemRouteGuard]
}