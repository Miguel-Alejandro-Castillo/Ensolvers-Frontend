import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListFoldersComponent } from './components/tasks/folders/list-folders/list-folders.component';
import { GetFolderComponent } from './components/tasks/folders/get-folder/get-folder.component';
import { ListItemsComponent } from './components/tasks/items/list-items/list-items.component';
import { EditItemComponent } from './components/tasks/items/edit-item/edit-item.component';
import { RowItemComponent } from './components/tasks/items/row-item/row-item.component';
import { InputNewItemComponent } from './components/tasks/items/input-new-item/input-new-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemsComponent,
    EditItemComponent,
    ListFoldersComponent,
    GetFolderComponent,
    RowItemComponent,
    InputNewItemComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
