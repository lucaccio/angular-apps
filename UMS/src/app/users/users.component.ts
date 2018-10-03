
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

    ngOnInit()  {
        this.users = this.service.getUsers();
    }

    onDeleteUser(user) {
       // console.log(user );
       this.service.deleteUser(user);
    }


}
