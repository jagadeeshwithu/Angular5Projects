import { Route } from "../../../../node_modules/@angular/router";
import { FeedItemComponent } from "./FeedItem.component";
import { FeedItemRouteGuard } from "../../common/route-guards.service";

export const FeedItemRoute: Route = <Route> {
    path: 'jagadeesh/rampam/:id',
    component: FeedItemComponent,
    canActivate: [FeedItemRouteGuard]
}