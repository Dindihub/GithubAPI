import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UsersearchComponent } from './usersearch/usersearch.component';
import { ReposearchComponent } from './reposearch/reposearch.component';
import { UserService } from './user.service';
import { RepoService } from './repo.service';
import { AppRoutingModule,routingComponents} from './app-routing.module';
import { HoverDirective } from './hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    routingComponents,
    UsersearchComponent,
    ReposearchComponent,
    HoverDirective,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule

  ],
  providers: [UserService,RepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
