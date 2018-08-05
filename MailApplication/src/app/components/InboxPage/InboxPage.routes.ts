import { MailItemsListRoute } from "./MailItems/mail-items-list/mail-items-list.route";
import { MailItemRoute } from "./MailItems/mail-item/mail-item.route";
import { RouterModule } from "../../../../node_modules/@angular/router";

const InboxPageRoutes = [
    MailItemsListRoute,
    MailItemRoute
];

export default RouterModule.forRoot(InboxPageRoutes);