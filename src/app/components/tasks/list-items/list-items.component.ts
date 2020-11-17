import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemTask } from 'src/app/models/item-task';
import { ItemTaskService } from 'src/app/services/item-task.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  public items: Observable<ItemTask>;
  
  constructor(private itemTaskService: ItemTaskService) { }

  ngOnInit(): void {
    this.itemTaskService.findByOwnerId(1).subscribe((result: ItemTask[])=> console.log(result));
  }

}
