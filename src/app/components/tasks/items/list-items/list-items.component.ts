import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ItemTask } from 'src/app/models/item-task';
import { User } from 'src/app/models/user';
import { ItemTaskService } from 'src/app/services/item-task.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  public items$: Observable<ItemTask[]>;
  
  constructor(public itemTaskService: ItemTaskService) { }

  ngOnInit(): void {
    this.refreshListItems();
  }

  private refreshListItems(): void{
    //reemplazar el 1 con el id del usuario!!
    this.items$ = this.itemTaskService.findByOwnerId(1);
  }

  createTask(itemTask: ItemTask): void{
      this.refreshListItems();
  }

  editTask(itemTask: ItemTask): void {
  }

  deleteTask(): void{
      this.refreshListItems();
  }

}
