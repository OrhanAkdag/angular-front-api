import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ComputerDetailComponent } from './components/computer-detail/computer-detail.component';
import { ComputerAddComponent } from './components/computer-add/computer-add.component';
import { ComputerEditComponent } from './components/computer-edit/computer-edit.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path:'computers', component: DashboardComponent},
  {path:'computers/:id', component: ComputerDetailComponent},
  {path: 'add-computer', component: ComputerAddComponent},
  {path: 'edit/:id', component: ComputerEditComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
