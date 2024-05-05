import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatAIComponent } from './chat-ai/chat-ai.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'notFound',component:NotFoundComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'chatAI',component:ChatAIComponent},
  {path:'**',redirectTo:'notFound',pathMatch:'full'}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
