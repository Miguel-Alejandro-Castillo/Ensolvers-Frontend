import { Task } from './task';

export class FolderTask extends Task{
    items: Task[] = [];
    type: string = "FOLDER";
}
