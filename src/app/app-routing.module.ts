import { UsersearchComponent } from './usersearch/usersearch.component';
import { ReposearchComponent } from './reposearch/reposearch.component';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"",component:NavComponent},
  {path:"",component:ReposearchComponent},
  {path:'',component:UsersearchComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
