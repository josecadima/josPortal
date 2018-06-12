import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';

import { ProjectsService } from './services/projects.service';
import { AdminToolComponent } from './admintool/admintool.component';
import { LogsViewerComponent } from './logsviewer/logsviewer.component';
import { HomeComponent } from './home/home.component'

const appRoutes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'admintool', component: AdminToolComponent },
  { path: 'logsviewer', component: LogsViewerComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    AdminToolComponent,
    LogsViewerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FlexLayoutModule, HttpModule, 
    MatToolbarModule, MatSidenavModule, MatExpansionModule, MatGridListModule, MatListModule, 
    MatCardModule, MatChipsModule, MatIconModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }
    )
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
