import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): Array<{}> {
    return [
      {
        name: 'Doe2',
      },
      {
        name: 'Trump',
      }
    ];
  }

}
