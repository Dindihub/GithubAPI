import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  @Output() username:EventEmitter<any>=new EventEmitter();
  user: any;
  constructor(private userService: UserService) {}

  onSubmit(username: string) {
    this.username.emit(username)
    this.userService.getUser(username).then((result) => {
      this.user = result;
    });
  }

  ngOnInit(): void {}
}
