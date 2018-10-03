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
  @Output('onDeleUser') userDeleted = new EventEmitter()

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  deleteUser( ) {
    console.log(this);
     //this.userService.deleteUser(this.user); chiamo il servizio per delete

     this.userDeleted.emit(this.user);



  }
  


}
