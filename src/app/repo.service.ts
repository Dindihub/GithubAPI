import { Injectable } from '@angular/core';
import { Repo } from './repo';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  foundRepo: Repo;

  constructor(private http: HttpClient) {
    this.foundRepo = new Repo("","","",0,new Date);
  }
}
  

