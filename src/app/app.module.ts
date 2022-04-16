import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UsersearchComponent } from './usersearch/usersearch.component';
import { ReposearchComponent } from './reposearch/reposearch.component';
import { UserService } from './user.service';
import { RepoService } from './repo.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UsersearchComponent,
    ReposearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [UserService,RepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
