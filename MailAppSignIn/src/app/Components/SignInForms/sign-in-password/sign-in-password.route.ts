import { Route } from "@angular/compiler/src/core";
import { SignInPasswordComponent } from "./sign-in-password.component";

export const signInPasswordRoute: Route = <Route> {
    path: 'signin/password',
    component: SignInPasswordComponent
}