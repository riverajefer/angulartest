import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  text = 'user page';
  users: any;

  constructor(private userService: UsersService) {
    this.users = this.userService.getUsers();
  }

  ngOnInit(): void {
  }

}
