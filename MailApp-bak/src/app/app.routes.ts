import { RouterModule } from '@angular/router';

import { MailItemsListRoute } from "./Components/MailItemsList/MailItemsList.route";
import { MailItemRoute } from './Components/MailItem/MailItem.route';
import { ChatItemRoute } from './Components/ChatItem/ChatItem.route';
import { ChatItemsListRoute } from './Components/ChatItemsList/ChatItemsList.route';

const appRoutes = [
    {
        path: '',
        redirectTo: 'mails',
        pathMatch: 'full'
    },
    // MailItemRoute,
    {
        path: 'mails/:id',
        name: 'jaggu',
        component: MailItemComponent,
        canActivate: [MailItemRouteGuard]
    },
    // MailItemsListRoute,
    {
        path: 'mails',
        component: MailItemsListComponent
    },
    ChatItemRoute,
    // ChatItemsListRoute
];

export default RouterModule.forRoot(appRoutes);