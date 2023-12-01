import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntertainmentComponent } from '../entertainment/entertainment.component';

const routes: Routes = [
  {
    path:'entertainment',
    component:EntertainmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntertainRoutingModule { }
