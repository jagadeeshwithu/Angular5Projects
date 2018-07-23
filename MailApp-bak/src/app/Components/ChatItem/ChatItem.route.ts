import { Route } from "@angular/router";
import { ChatItemComponent } from "./ChatItem.component";

export const ChatItemRoute: Route = <Route> {
    path: 'chats/:id',
    component: ChatItemComponent,
    // canActivate: []
}