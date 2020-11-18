import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { FolderTask } from 'src/app/models/folder-task';
import { ItemTask } from 'src/app/models/item-task';
import { User } from 'src/app/models/user';
import { FolderTaskService } from 'src/app/services/folder-task.service';
import { ItemTaskService } from 'src/app/services/item-task.service';

@Component({
  selector: 'app-input-new-item',
  templateUrl: './input-new-item.component.html',
  styleUrls: ['./input-new-item.component.css']
})
export class InputNewItemComponent implements OnInit {

  newTask: string = "";

  @Input()
  folderTaskParent: FolderTask;

  @Output()
  public create: EventEmitter<ItemTask> = new EventEmitter<ItemTask>();
  
  constructor(private itemTaskService: ItemTaskService, private folderTaskService: FolderTaskService) { }

  ngOnInit(): void {
  }

  createTask(): void{
    let itemTask: ItemTask = new ItemTask();
    itemTask.name = this.newTask;
    itemTask.completed = false;

    /* Probando el alta */
    itemTask.owner = new User();
    //reemplzar el 1 con el usuario del usuario!!
    itemTask.owner.id = 1;
    /*                  */

    if(this.folderTaskParent){
      this.folderTaskParent.items.push(itemTask);
      this.folderTaskService.edit(this.folderTaskParent).pipe(take(1)).subscribe((folderTask: FolderTask) => {
        this.newTask = "";
        //que devuelva el itemTask con el id correspondiente
        this.create.emit(itemTask);
      });
    } else {
        //reemplzar el 1 con el usuario del usuario!!
        this.itemTaskService.create(itemTask).pipe(take(1)).subscribe(
          (data: ItemTask) => {
            this.newTask = "";
            this.create.emit(data);
        });
    }

  
  }

}
