import { Route, RouterModule } from '@angular/router';

const appRoute: Route = <Route> {
    path: '',
    redirectTo: 'mails',
    pathMatch: 'full'
}

export default appRoute;