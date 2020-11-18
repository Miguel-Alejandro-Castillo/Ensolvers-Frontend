import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemTask } from 'src/app/models/item-task';
import { AuthService } from 'src/app/services/auth.service';
import { ItemTaskService } from 'src/app/services/item-task.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  public items$: Observable<ItemTask[]>;

  constructor(private authService: AuthService, private itemTaskService: ItemTaskService) { }

  ngOnInit(): void {
    this.refreshListItems();
  }

  private refreshListItems(): void{
    this.items$ = this.itemTaskService.findByOwnerId(this.authService.getUserLoggedIn().id);
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
