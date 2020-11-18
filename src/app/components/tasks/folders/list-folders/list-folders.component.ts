import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { FolderTask } from 'src/app/models/folder-task';
import { AuthService } from 'src/app/services/auth.service';
import { FolderTaskService } from 'src/app/services/folder-task.service';

@Component({
  selector: 'app-list-folders',
  templateUrl: './list-folders.component.html',
  styleUrls: ['./list-folders.component.css']
})
export class ListFoldersComponent implements OnInit {

  public folders$: Observable<FolderTask[]>;

  public newFolder: string = "";

  constructor(private authService: AuthService, private folderTaskService: FolderTaskService) { }

  
  ngOnInit(): void {
    this.refreshListFolders();
  }

  createFolder(): void{
    let folderTask: FolderTask = new FolderTask();
    folderTask.name = this.newFolder;
    folderTask.owner = this.authService.getUserLoggedIn();

    this.folderTaskService.create(folderTask).pipe(take(1)).subscribe(
      (data: FolderTask) => {  
        this.newFolder = "";
        this.refreshListFolders();
      },
      (error: any) => { console.log(error);  }
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
    this.folders$ = this.folderTaskService.findByOwnerId(this.authService.getUserLoggedIn().id);
  }

}
