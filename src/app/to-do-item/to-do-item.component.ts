import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent {
  Display:boolean=true;
  @Input()taskN:any;
  dashed :boolean = false;
  completeFunc(){
    this.dashed=true;
  }
  deleteFunc(){
    this.Display=false;
  }
}
