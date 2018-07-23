import { Route } from "@angular/router";
import { ChatItemsListComponent } from "./ChatItemsList.component";

export const ChatItemsListRoute: Route = <Route> {
    path: 'chats',
    component: ChatItemsListComponent
}