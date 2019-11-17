import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ViewUserComponent } from './components/view/view-user/view-user.component';


const routes: Routes = [
  {path:'', component:ViewUserComponent},
  {path:'home', component:HomeComponent},
  {path:'user', component:ViewUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
