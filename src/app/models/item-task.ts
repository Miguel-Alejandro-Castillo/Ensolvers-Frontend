import { Task } from './task';

export class ItemTask extends Task{
    completed: boolean = false;
    type: string = "ITEM";
}
