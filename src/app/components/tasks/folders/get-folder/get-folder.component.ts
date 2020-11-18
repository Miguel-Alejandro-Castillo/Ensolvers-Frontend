import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { FolderTask } from 'src/app/models/folder-task';
import { ItemTask } from 'src/app/models/item-task';
import { Task } from 'src/app/models/task';
import { FolderTaskService } from 'src/app/services/folder-task.service';

@Component({
  selector: 'app-get-folder',
  templateUrl: './get-folder.component.html',
  styleUrls: ['./get-folder.component.css']
})
export class GetFolderComponent implements OnInit {

  public items$: Observable<ItemTask[]>;
  public folderTask: FolderTask;
  public folderId: number;

  
  constructor(private folderTaskService: FolderTaskService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.folderId = Number(this.route.snapshot.paramMap.get("id"));
    this.refreshListItems();
  }

  private refreshListItems(): void {
    this.folderTaskService.findById(this.folderId).pipe(take(1)).subscribe((data: FolderTask) => {
      this.folderTask = data;
      const items: ItemTask[] = this.folderTask.items.filter( t => t.type === "ITEM").map( t => <ItemTask>t);
      this.items$ = of(items);
    });
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
