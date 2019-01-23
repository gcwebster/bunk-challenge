import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { QuizComponent } from './quiz/quiz.component';
import { FootballComponent } from './football/football.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'weather', component: HomeComponent},
  { path: 'quiz', component: QuizComponent},
  { path: 'football', component: FootballComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    QuizComponent,
    FootballComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false,
        anchorScrolling: 'enabled'
      }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }