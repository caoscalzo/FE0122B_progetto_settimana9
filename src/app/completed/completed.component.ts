import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import * as ToDoFunction from '../task.service';
import { TasktodoComponent } from '../tasktodo/tasktodo.component';


@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent {
  tasks!: Todo[];

  newTaskTitle: string | undefined;
  constructor() {
    ToDoFunction.get().then((todos) => (this.tasks = todos.filter(todo => todo.completed)));
  }
}
