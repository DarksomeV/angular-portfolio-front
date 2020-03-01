import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';
import { WorksPageComponent } from './pages/works-page/works-page.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RoundProgressModule } from "angular-svg-round-progressbar";
import { NgxSkillBarModule } from "ngx-skill-bar";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileCardComponent,
    HomePageComponent,
    ResumePageComponent,
    WorksPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoundProgressModule,
    NgxSkillBarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
