import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServicesMockService {

  constructor() { }
  getUsers(): Array<{}> {
    return [
      {
        name: 'Doe'
      }
    ];
  }


}
