import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { GetFolderComponent } from './components/tasks/folders/get-folder/get-folder.component';
import { ListFoldersComponent } from './components/tasks/folders/list-folders/list-folders.component';
import { EditItemComponent } from './components/tasks/items/edit-item/edit-item.component';
import { ListItemsComponent } from './components/tasks/items/list-items/list-items.component';
import { MenuComponent } from './components/templates/menu/menu.component';
import { PrivatePageGuard } from './guards/private-page.guard';
import { PublicPageGuard } from './guards/public-page.guard';

const routes: Routes = [
  { path: 'login', 
    component: LoginComponent,
    canActivate: [PublicPageGuard] 
  },
  { path: 'menu', 
    component: MenuComponent,
    canActivate: [PrivatePageGuard]  
  },
  { path: 'list-items', 
    component: ListItemsComponent,
    canActivate: [PrivatePageGuard] 
  },
  {
    path: 'items/edit/:id',
    component: EditItemComponent,
    canActivate: [PrivatePageGuard]
  },
  { path: 'list-folders', 
    component: ListFoldersComponent,
    canActivate: [PrivatePageGuard]
  },
  {
    path: 'folders/get/:id',
    component: GetFolderComponent,
    canActivate: [PrivatePageGuard]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
