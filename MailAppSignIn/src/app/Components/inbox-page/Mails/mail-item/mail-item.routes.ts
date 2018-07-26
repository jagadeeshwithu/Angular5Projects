import { Route } from "@angular/router";

import { MailItemRouteGuard } from "../../../../Common/route-guards-ss-service.service";
import { InboxPageComponent } from "../../inbox-page.component";

export const MailItemRoute: Route = <Route> {
    path: 'inbox/mails/:id',
    component: InboxPageComponent,
    canActivate: [MailItemRouteGuard]
}