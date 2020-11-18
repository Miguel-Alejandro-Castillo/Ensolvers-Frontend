import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ItemTask } from 'src/app/models/item-task';
import { ItemTaskService } from 'src/app/services/item-task.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  public itemTask: ItemTask;
  public nameTask: string;

  constructor(private location: Location, private router: Router, private route: ActivatedRoute, private itemTaskService: ItemTaskService) { }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get("id"));
    this.itemTaskService.findById(id).pipe(take(1)).subscribe((data: ItemTask) => {
      this.itemTask = data;
      this.nameTask = this.itemTask.name;
    });
  }

  public editTask(): void{
    this.itemTaskService.edit(this.itemTask).pipe(take(1)).subscribe((data: ItemTask) => {
      this.back();
    });
  }

  public cancel(): void{
    this.back();
  }

  private back(): void{
    this.location.back();
    //this.router.navigate(['/list-items']);
  }

}
