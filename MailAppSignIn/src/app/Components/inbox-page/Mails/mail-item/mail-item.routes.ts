import { Route } from "@angular/router";

import { MailItemComponent } from "./mail-item.component";
import { MailItemRouteGuard } from "../../../../Common/route-guards-ss-service.service";

export const MailItemRoute: Route = <Route> {
    path: 'inbox/mails/:id',
    component: MailItemComponent,
    canActivate: [MailItemRouteGuard]
}