import { Route } from "../../../../node_modules/@angular/compiler/src/core";
import { FeedItemsListComponent } from "./FeedItemsList.component";

export const FeedItemsListRoute: Route = <Route> {
    path: 'jagadeesh/rampam',
    component: FeedItemsListComponent
}

export const FeedItemsListEmptyRoute: Route = <Route> {
    path: '',
    component: FeedItemsListComponent
}