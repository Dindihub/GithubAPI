import { HomepageComponent } from './homepage/homepage.component';
import { UsersearchComponent } from './usersearch/usersearch.component';
import { ReposearchComponent } from './reposearch/reposearch.component';
import { NavComponent } from './nav/nav.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"reposearch",component:ReposearchComponent},
  {path:"usersearch",component:UsersearchComponent},
  {path:"" ,component:HomepageComponent},
  {path:"nav",component:NavComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[NavComponent,ReposearchComponent,UsersearchComponent,HomepageComponent]