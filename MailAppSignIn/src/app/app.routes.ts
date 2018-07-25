import { RouterModule } from '@angular/router';

import { signInUserIdRoute } from "./Components/SignInForms/sign-in-user-id/sign-in-user-id.route";
import { signInPasswordRoute } from "./Components/SignInForms/sign-in-password/sign-in-password.route";
import { MailItemsListRoute } from './Components/inbox-page/Mails/mail-items-list/mail-items-list.routes';
import { MailItemRoute } from './Components/inbox-page/Mails/mail-item/mail-item.routes';
import { InboxRoute } from './Components/inbox-page/inbox-page.route';

const appRoutes = [
    {
        path: '',
        redirectTo: 'signin/userid',
        pathMatch: 'full'
    },
    signInUserIdRoute,
    signInPasswordRoute,
    MailItemsListRoute,
    MailItemRoute,
    InboxRoute
];

export default RouterModule.forRoot(appRoutes);