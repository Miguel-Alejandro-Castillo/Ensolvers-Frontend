import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { GetFolderComponent } from './components/tasks/folders/get-folder/get-folder.component';
import { ListFoldersComponent } from './components/tasks/folders/list-folders/list-folders.component';
import { EditItemComponent } from './components/tasks/items/edit-item/edit-item.component';
import { ListItemsComponent } from './components/tasks/items/list-items/list-items.component';
import { MenuComponent } from './components/templates/menu/menu.component';

const routes: Routes = [
  { path: 'login', 
    component: LoginComponent 
  },
  { path: 'menu', 
    component: MenuComponent 
  },
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
