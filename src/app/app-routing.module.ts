import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListItemsComponent } from './components/tasks/list-items/list-items.component';

const routes: Routes = [
  { path: 'list-items', component: ListItemsComponent },
  { path: '', redirectTo: '/list-items', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
