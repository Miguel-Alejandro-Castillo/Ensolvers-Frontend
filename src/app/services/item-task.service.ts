import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemTask } from '../models/item-task';

@Injectable({
  providedIn: 'root'
})
export class ItemTaskService {

  private URL: string = "/tasks";
  
  constructor( private http: HttpClient ) { }

  public findById(id: number): Observable<ItemTask>{
    return this.http.get<ItemTask>(this.URL + "/item/" + id);
  }

  public findByOwnerId(ownerId: number): Observable<ItemTask[]> {
    return this.http.get<ItemTask[]>(this.URL + "/items/" + ownerId);
  }

  public create(itemTask: ItemTask): Observable<ItemTask> {
    return this.http.post<ItemTask>(this.URL + "/item/create", itemTask);
  }

  public edit(itemTask: ItemTask): Observable<ItemTask> {
    return this.http.put<ItemTask>(this.URL + "/item/edit", itemTask);
  }

}
