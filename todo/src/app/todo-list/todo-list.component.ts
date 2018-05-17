import { Component } from '@angular/core';
import {DataService} from "./todo-item/data-service";
import Todo from "./todo-item/todo.interface";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
public todoList: Todo[];
constructor(private dataService:DataService) {
  this.todoList = this.dataService.getData()
}
  public changeStatus(todo) {
    console.log(todo)
  }


}
