import { Route } from "@angular/compiler/src/core";

import { InboxPageComponent } from "../../inbox-page.component";

export const MailItemsListRoute: Route = <Route> {
  path: 'inbox/mails',
  component: InboxPageComponent
};