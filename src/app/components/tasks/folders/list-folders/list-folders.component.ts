import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { FolderTask } from 'src/app/models/folder-task';
import { User } from 'src/app/models/user';
import { FolderTaskService } from 'src/app/services/folder-task.service';

@Component({
  selector: 'app-list-folders',
  templateUrl: './list-folders.component.html',
  styleUrls: ['./list-folders.component.css']
})
export class ListFoldersComponent implements OnInit {

  public folders$: Observable<FolderTask[]>;

  public newFolder: string = "";

  constructor(private folderTaskService: FolderTaskService) { }

  
  ngOnInit(): void {
    this.refreshListFolders();
  }

  createFolder(): void{
    let folderTask: FolderTask = new FolderTask();
    folderTask.name = this.newFolder;

    /* Probando el alta */
    folderTask.owner = new User();
    folderTask.owner.id = 1;
    /*                  */

    this.folderTaskService.create(folderTask).pipe(take(1)).subscribe(
      (data: FolderTask) => { 
        console.log(folderTask); 
        this.newFolder = "";
        this.refreshListFolders();
      },
      (error: any) => { console.log(error); console.error("Ocurrio un errror"); }
    )
  
  }

  editFolder(folderTask: FolderTask): void {
    this.folderTaskService.edit(folderTask).pipe(take(1)).subscribe();
  }

  deleteFolder(id: number): void{
    this.folderTaskService.delete(id).pipe(take(1)).subscribe((data: any) => {
      this.refreshListFolders();
    });
  }

  private refreshListFolders(): void{
    this.folders$ = this.folderTaskService.findByOwnerId(1);
  }

}
