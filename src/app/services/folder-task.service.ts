import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FolderTask } from '../models/folder-task';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class FolderTaskService {
  
  private URL: string = "/tasks";
  
  constructor( private http: HttpClient ) { }

  public findById(id: number): Observable<FolderTask>{
    return this.http.get<FolderTask>(this.URL + "/folder/" + id);
  }

  public getItemsByFolderId(id: number): Observable<Task[]>{
    return this.http.get<Task[]>(this.URL + "/folder/" + id + "/items");
  }

  public findByOwnerId(ownerId: number): Observable<FolderTask[]> {
    return this.http.get<FolderTask[]>(this.URL + "/folders/" + ownerId);
  }

  public create(folderTask: FolderTask): Observable<FolderTask> {
    return this.http.post<FolderTask>(this.URL + "/folder/create", folderTask);
  }

  public edit(folderTask: FolderTask): Observable<FolderTask> {
    return this.http.put<FolderTask>(this.URL + "/folder/edit", folderTask);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + "/folder/delete/" + id);
  }

}
