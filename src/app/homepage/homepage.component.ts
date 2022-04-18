import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  username: string = '';
  user: any;
  constructor(private userService: UserService) {}

  onSubmit(username: string) {
    this.userService.getUser(username).then((result) => {
      this.user = result;
    });
  }

  ngOnInit(): void {}
}
