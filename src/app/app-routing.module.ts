import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditItemComponent } from './components/tasks/edit-item/edit-item.component';
import { GetFolderComponent } from './components/tasks/folders/get-folder/get-folder.component';
import { ListFoldersComponent } from './components/tasks/folders/list-folders/list-folders.component';
import { ListItemsComponent } from './components/tasks/list-items/list-items.component';

const routes: Routes = [
  { path: 'list-items', 
    component: ListItemsComponent 
  },
  {
    path: 'items/edit/:id',
    component: EditItemComponent
  },
  { path: 'list-folders', 
    component: ListFoldersComponent 
  },
  {
    path: 'folders/get/:id',
    component: GetFolderComponent
  },
  { path: '', redirectTo: '/list-items', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
