import { RouterModule } from "../../node_modules/@angular/router";
import { FeedItemsListRoute } from "./components/FeedItemsListComponent/FeedItemsList.route";
import { FeedItemRoute } from "./components/FeedItemComponent/FeedItem.routes";

const appRoutes = [
    FeedItemsListRoute,
    FeedItemRoute
];

export default RouterModule.forRoot(appRoutes);