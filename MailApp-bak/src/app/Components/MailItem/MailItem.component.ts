import { Component } from "@angular/core";
import { UserService, IUserData } from "../../Common/user.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'mail-item',
    templateUrl: './MailItem.component.html',
    providers: [UserService]
})

export class MailItemComponent{
    private childId: number;
    private userData: IUserData;

    constructor(private userService: UserService, private currentRoute: ActivatedRoute){
        this.currentRoute.params.subscribe(
            (params) => {
                this.childId = params['id'];
                this.userService.getSingleUserData(this.childId).subscribe(
                    (d: any) => {
                        this.userData = d.data;

                    }
                )
            }
        );
    }
}