import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './components/menu/menu.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { ComputerDetailComponent } from './components/computer-detail/computer-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ComputerAddComponent } from './components/computer-add/computer-add.component';
import { ComputerEditComponent } from './components/computer-edit/computer-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    ComputerDetailComponent,
    NotFoundComponent,
    ComputerAddComponent,
    ComputerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    CollapseModule.forRoot(),
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
