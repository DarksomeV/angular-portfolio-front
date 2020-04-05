import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';
import { WorksPageComponent } from './pages/works-page/works-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { NgxSkillBarModule } from 'ngx-skill-bar';
import { NgSlimScrollModule, SLIMSCROLL_DEFAULTS } from 'ngx-slimscroll';
import { MobileHomePageComponent } from './pages/mobile-home-page/mobile-home-page.component';
import { FileSaverModule } from 'ngx-filesaver';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { IgxTabsModule } from 'igniteui-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileCardComponent,
    HomePageComponent,
    ResumePageComponent,
    WorksPageComponent,
    MobileHomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoundProgressModule,
    NgxSkillBarModule,
    AppRoutingModule,
    NgSlimScrollModule,
    FileSaverModule,
    HttpClientModule,
    SharedModule,
    IgxTabsModule
  ],
  providers: [{
    provide: SLIMSCROLL_DEFAULTS,
    useValue: {
      barWidth: '5',
      gridWidth: '2',
      gridOpacity: '0',
      barBackground: '#f08808',
      barOpacity: '0.7',
      alwaysVisible: false
    },
  }, HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
