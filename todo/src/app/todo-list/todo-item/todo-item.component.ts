import {Component, EventEmitter, Input, Output,} from '@angular/core';
import  Todo from './todo.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() onChangedStatus = new EventEmitter<Todo>();
  constructor() {

  }

  public toggleStatus() {
    this.onChangedStatus.emit(this.todo)
  }


}
