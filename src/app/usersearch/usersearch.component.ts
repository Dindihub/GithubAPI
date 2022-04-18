import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { RepoService } from '../repo.service';

@Component({
  selector: 'app-usersearch',
  templateUrl: './usersearch.component.html',
  styleUrls: ['./usersearch.component.css'],
})
export class UsersearchComponent implements OnInit {
  username: string = '';
  user: any;
  repos: any;
  constructor(
    private userService: UserService,
    private reposervice: RepoService
  ) {}

  onSubmit(username: string) {
    this.userService.getUser(username).then((result) => {
      this.user = result;
    });

    this.repoSearch(username)
  }
  repoSearch(username: string) {
    this.reposervice.getRepo(username).then((result) => {
      this.repos = result;
    });
  }
  ngOnInit(): void {
    this.onSubmit("Dindihub")
    console.log("new")
  }
}

