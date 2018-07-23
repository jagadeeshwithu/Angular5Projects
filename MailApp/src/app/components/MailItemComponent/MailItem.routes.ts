import { Route } from "../../../../node_modules/@angular/router";
import { MailItemComponent } from "./MailItem.component";
import { MailItemRouteGuard } from "../../common/route-guards.service";

export const MailItemRoute: Route = <Route> {
    path: 'inbox/mails/:id',
    component: MailItemComponent,
    canActivate: [MailItemRouteGuard]
}