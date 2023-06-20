import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RoleMasterComponent } from './components/roleMaster/roleMaster.component';
import{ DispalyDataComponent } from './components/dispaly-data/dispaly-data.component'
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path: '',( err?.code === 0) ? (redirectTo: `${err?.code === 0 ? '' : "/login"}`, pathMatch: 'full'): null },
  { path: "role-master", component: RoleMasterComponent },
  
  {    path:'dispay',component:DispalyDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
