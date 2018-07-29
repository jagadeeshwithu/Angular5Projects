import { RouterModule, Route } from "../../node_modules/@angular/router";
import { ResultComponent } from "./components/result-component/result-component.component";

const appRoutes = [
    {
        path: 'search/:name',
        component: ResultComponent,
    }
]

export default RouterModule.forRoot(appRoutes);