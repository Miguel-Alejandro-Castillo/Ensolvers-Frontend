import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ItemTask } from 'src/app/models/item-task';
import { ItemTaskService } from 'src/app/services/item-task.service';

@Component({
  selector: 'app-row-item',
  templateUrl: './row-item.component.html',
  styleUrls: ['./row-item.component.css']
})
export class RowItemComponent implements OnInit {

  @Input()
  public item: ItemTask;

  @Output()
  public edit: EventEmitter<ItemTask> = new EventEmitter<ItemTask>();

  @Output()
  public delete: EventEmitter<void> = new EventEmitter<void>();

  constructor(private itemTaskService: ItemTaskService) { }

  ngOnInit(): void {
  }

  editTask(itemTask: ItemTask): void {
    this.itemTaskService.edit(itemTask).pipe(take(1)).subscribe((data: ItemTask)=>{
      this.edit.emit(data);
    });
  }

  deleteTask(id: number): void{
    this.itemTaskService.delete(id).pipe(take(1)).subscribe((data: any) => {
       this.delete.emit();
    });
  }

}
