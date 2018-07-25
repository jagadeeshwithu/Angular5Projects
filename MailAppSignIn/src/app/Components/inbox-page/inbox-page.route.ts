import { Route } from "@angular/router";
import { InboxPageComponent } from "./inbox-page.component";

export const InboxRoute: Route = <Route> {
  path: 'inbox',
  component: InboxPageComponent
};

// export const InboxMailsRoute: Route = <Route> {
//   path: 'inbox/mails',
//   component: InboxPageComponent
// }