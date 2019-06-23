import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { NewwindowComponent } from './newwindow/newwindow.component';
import { UserlistComponent } from './userlist/userlist.component'
const routes: Routes = [
  { path: '', component:RegisterComponent},
  { path: 'Registeration', component:RegisterComponent},
  { path: 'login', component:LoginComponent},
  {path:'details', component:DetailsComponent},
  {path:'userlist', component:UserlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 export const routingComponents = [RegisterComponent,DetailsComponent,LoginComponent,NewwindowComponent,UserlistComponent]
