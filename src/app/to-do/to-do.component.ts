import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
  task : string= "";
  taskArr :any = [];
  holdTaskName(ts:string){
    console.log(ts);
    this.task=ts;
    this.taskArr.push(this.task)
  }
}