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

  public newTask: string = "";
  
  constructor(public itemTaskService: ItemTaskService) { }

  ngOnInit(): void {
    this.refreshListItems();
  }

  private refreshListItems(): void{
    this.items$ = this.itemTaskService.findByOwnerId(1);
  }

  createTask(): void{
    let itemTask: ItemTask = new ItemTask();
    itemTask.name = this.newTask;
    itemTask.completed = false;

    /* Probando el alta */
    itemTask.owner = new User();
    itemTask.owner.id = 1;
    //itemTask.owner.nickname = "admin";
    //itemTask.owner.password = "1234";
    /*                  */

    this.itemTaskService.create(itemTask).pipe(take(1)).subscribe(
      (data: ItemTask) => { 
        console.log(itemTask); 
        this.newTask = "";
        this.refreshListItems();
      },
      (error: any) => { console.log(error); console.error("Ocurrio un errror"); }
    )
  
  }

  editTask(itemTask: ItemTask): void {
    this.itemTaskService.edit(itemTask).pipe(take(1)).subscribe();
  }

  deleteTask(id: number): void{
    this.itemTaskService.delete(id).pipe(take(1)).subscribe((data: any) => {
      this.refreshListItems();
    });
  }

}
