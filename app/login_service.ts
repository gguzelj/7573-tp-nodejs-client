import {Injectable} from "@angular/core";

@Injectable()
export class LoginService {
    private current_user;

    constructor() {}

    set_current_user(val) {
        this.current_user = val;
    }

    get_current_user() {
        return current_user.val;
    }
}
