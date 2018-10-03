
import { Component , OnInit } from '@angular/core';

import {UserService} from './user.service';


@Component({
    selector: 'app-users',
    templateUrl: './users-component.html',
    styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

    title = 'Elenco utenti';
    users = [];

   // private service: UserService;

    constructor( private service: UserService) {
    }

    _users = [
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

    ngOnInit()  {
        this.users = this.service.getUsers();
    }


}
