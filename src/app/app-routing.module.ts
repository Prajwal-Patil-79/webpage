import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntertainComponent } from './entertain/entertain/entertain.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';

const routes: Routes = [
  {
    path:'',
    component:EntertainComponent
  },
  {
    path:'entertainment',
    component:EntertainmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
