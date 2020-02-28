import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MycardComponent } from './mycard/mycard.component';
import { ListpagesComponent } from './listpages/listpages.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
 
  
  {path: '',component :LoginComponent},
  {path:'home',component:HomeComponent},
  {path: 'card',component :MycardComponent},
  {path: 'list',component :ListpagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
