import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/entities/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  task: Task = {
    id: 1,
    taskDescription: 'task 01'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
