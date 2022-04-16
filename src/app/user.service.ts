import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  foundUser:User;

  constructor(private http: HttpClient) {
    this.foundUser = new User("","",0,0,0,"",new Date);
    


    
  }




}

