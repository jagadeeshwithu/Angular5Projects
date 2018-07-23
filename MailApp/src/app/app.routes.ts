import { RouterModule } from '@angular/router';

import { MailItemsListRoute, MailItemsListEmptyRoute } from "./components/MailItemsListComponent/MailItemsList.route";
import { MailItemRoute } from './components/MailItemComponent/MailItem.routes';

const appRoutes = [
    MailItemsListEmptyRoute,
    MailItemRoute,
    MailItemsListRoute
];

export default RouterModule.forRoot(appRoutes);