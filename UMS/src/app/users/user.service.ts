
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {

    users = [
        {
            name: 'luca',
            lastname: 'xxx',
            fiscal_code: 'aasj3jasdl2',
            email: 'luka@tin.it',
            address: 'rome'
        },
        {
            name: 'davide',
            lastname: 'xxx',
            fiscal_code: 'aasj3jasdl2',
            email: 'davide@tin.it',
            address: 'milano'
        },
        {
            name: 'luca',
            lastname: 'xxx',
            fiscal_code: 'aasj3jasdl2',
            email: 'luka@tin.it',
            address: 'torino'
        },
    ];


    constructor() {
    }

    getUsers() {
        return this.users;
    }

    deleteUser(user) {
        let index = this.users.indexOf(user);
            if(index >=0) {
                this.users.splice(index,1)
            }
        
    }


}
