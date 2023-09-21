import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent {
   task:string="" ;
  saveTask(e :any){
   this.task = e.target.value;
  
  }
  @Output() firedFromChild = new EventEmitter();

  sendToParent(  ){
    this. firedFromChild.emit(this.task)
  }

}
