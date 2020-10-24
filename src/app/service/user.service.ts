import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.model";

@Injectable()
export class UserService{
  private _url: string = 'https://jsonplaceholder.typicode.com/users'
  privateUrl: string = '../assets/data.json';
constructor(private http: HttpClient) { }
  getUsers() {


   return this.http.get<User[]>(this.privateUrl);
 }
 

  getUserById(id: number) {
    return this.http.get<User>(this.privateUrl + '/' + id);
  }

  createUser(user: User) {
    return this.http.post(this.privateUrl, user);
  }



  updateUser(user: User) {
    return this.http.put(this.privateUrl + '/' + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.privateUrl + '/' + id);
  }
}
