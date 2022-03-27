import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TasktodoComponent } from './tasktodo/tasktodo.component';
import { CompletedComponent } from './completed/completed.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path:'tasktodo',
    component: TasktodoComponent
  },
  {
    path:'completed',
    component: CompletedComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TasktodoComponent,
    CompletedComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
