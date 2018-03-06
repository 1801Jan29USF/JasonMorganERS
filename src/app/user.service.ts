import { Injectable } from '@angular/core';
import { User } from './beans/user';

@Injectable()
export class UserService {

  user = new User();

  constructor() { }

  saveMe(coolUser: object) {
    this.user.id = coolUser['id'];
    this.user.username = coolUser['username'];
    this.user.password = coolUser['password'];
    this.user.firstName = coolUser['firstName'];
    this.user.lastName = coolUser['lastName'];
    this.user.userEmail = coolUser['userEmail'];
    this.user.userRoleId = coolUser['userRoleId'];
  }

  getMe() {
    return this.user;
  }

}
