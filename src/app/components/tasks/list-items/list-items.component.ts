import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  
  constructor(private itemTaskService: ItemTaskService) { }

  ngOnInit(): void {
    this.items$ = this.itemTaskService.findByOwnerId(1);
  }

  createTask(){
    let itemTask: ItemTask = new ItemTask();
    itemTask.name = this.newTask;
    itemTask.completed = false;

    /* Probando el alta */

    itemTask.owner = new User();
    itemTask.owner.id = 1;
    itemTask.owner.nickname = "admin";
    itemTask.owner.password = "1234";

    /*                  */

    this.itemTaskService.create(itemTask).pipe(take(1)).subscribe(
      (data: ItemTask) => { 
        this.items$ = this.itemTaskService.findByOwnerId(1)
        console.log(itemTask); 
        this.newTask = "";
      },
      (error: any) => { console.log(error); console.error("Ocurrio un errror"); }
    )
  
  }

  modifyTask(itemTask: ItemTask) {
    this.itemTaskService.edit(itemTask).pipe(take(1)).subscribe();
  }

}
