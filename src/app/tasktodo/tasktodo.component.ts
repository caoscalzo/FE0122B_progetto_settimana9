import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import * as ToDoFunoction from '../task.service';

@Component({
  selector: 'app-tasktodo',
  templateUrl: './tasktodo.component.html',
  styleUrls: ['./tasktodo.component.scss']
})
export class TasktodoComponent implements OnInit {


  task!: Todo[];
  newTaskTitle:string | undefined
  constructor() {
    ToDoFunoction.get().then(todos=>this.task = todos.filter(todo=>!todo.completed))
   }

  ngOnInit(): void {
  }
  async addTask(){
    const nTodo =  await ToDoFunoction.add({title:this.newTaskTitle as string,completed:false})
    this.task.push(nTodo);
    this.newTaskTitle = ''
   }

   async completeTask(todo:Todo,i:number){
    await ToDoFunoction.update({completed:true},todo.id)
    this.task.splice(i,1)
  }


}
