import { Component, OnInit } from '@angular/core';
import { RepoService } from '../repo.service'; 

@Component({
  selector: 'app-reposearch',
  templateUrl: './reposearch.component.html',
  styleUrls: ['./reposearch.component.css'],
})
export class ReposearchComponent implements OnInit {
  username: string = '';
  repo: any;
  constructor(private reposervice: RepoService) {}

  onSubmit(username: string) {
    this.reposervice.getRepo(username).then((result) => {
      this.repo = result;
    });
  }

  ngOnInit(): void {}
}
