import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UsersearchComponent } from './usersearch/usersearch.component';
import { ReposearchComponent } from './reposearch/reposearch.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UsersearchComponent,
    ReposearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
