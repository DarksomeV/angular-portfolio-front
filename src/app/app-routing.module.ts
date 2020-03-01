import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ResumePageComponent } from "./pages/resume-page/resume-page.component";
import { WorksPageComponent } from "./pages/works-page/works-page.component";


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent, data: { animation: 'Home' }},
  {path: 'resume', component: ResumePageComponent, data: { animation: 'Resume' }},
  {path: 'works', component: WorksPageComponent, data: { animation: 'Works' }},
  {path: '**',redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
