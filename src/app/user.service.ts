import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Userinterface } from './userinterface';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User;

  constructor(private http: HttpClient) {
    this.user = new User('', '', 0, 0, '','', new Date());
  }

  async getUser(username: string) {
    const searchUser = this.http.get<User>(
      `${environment.apiurl}/users/${username}`
    );
    return await lastValueFrom(searchUser).then((result) => {
      console.log(result);
      return result
    });
  }
}

// https://api.github.com/users/Dindihub
