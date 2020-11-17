import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { FolderTask } from 'src/app/models/folder-task';
import { ItemTask } from 'src/app/models/item-task';
import { Task } from 'src/app/models/task';
import { User } from 'src/app/models/user';
import { FolderTaskService } from 'src/app/services/folder-task.service';
import { ItemTaskService } from 'src/app/services/item-task.service';

@Component({
  selector: 'app-get-folder',
  templateUrl: './get-folder.component.html',
  styleUrls: ['./get-folder.component.css']
})
export class GetFolderComponent implements OnInit {

  public items$: Observable<ItemTask[]>;

  public folderTask: FolderTask;
  public folderId: number;
  public newTask: string;

  
  constructor(private itemTaskService: ItemTaskService, private folderTaskService: FolderTaskService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.folderId = Number(this.route.snapshot.paramMap.get("id"));
    this.folderTaskService.findById(this.folderId).pipe(take(1)).subscribe((data: FolderTask) => this.folderTask = data);
    this.refreshListItems();
  }

  private refreshListItems(): void{
    this.items$ = this.folderTaskService.getItemsByFolderId(this.folderId).pipe(take(1), map((tasks: Task[]) => tasks.filter( t => t.type === "ITEM").map( t => <ItemTask>t) ));
  }

  createTask(): void{
    let itemTask: ItemTask = new ItemTask();
    itemTask.name = this.newTask;
    itemTask.completed = false;

    /* Probando el alta */
    itemTask.owner = new User();
    itemTask.owner.id = 1;
    /*                  */

    this.folderTask.items.push(itemTask);
    this.folderTaskService.edit(this.folderTask).pipe(take(1)).subscribe((folderTask: FolderTask) => {
      this.newTask = "";
      this.refreshListItems();
    });
  
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
