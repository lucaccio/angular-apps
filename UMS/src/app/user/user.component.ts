import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { UserService } from '../users/user.service';


@Component({
  selector:  'tr[app-user] ',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  @Input('user-singolo') user;


  //sez 3 lez 21
  // sto dicendo che la propriuetà userDleted con alias onDeleteUser è un oggetto eventEmitter che uscirà dalla classe
  // questo funziona tra classe figlio e classe padre

  @Output('onDeleteUser') userDeleted = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit() {}

  deleteUser( ) {
    
     //this.userService.deleteUser(this.user); chiamo il servizio per delete

    //il parametro verrà mappato in $event del relativo file html
     this.userDeleted.emit(this.user);
  }

}
