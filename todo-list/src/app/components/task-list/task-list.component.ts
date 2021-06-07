import { Component, OnInit } from '@angular/core';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../interfaces/task'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  faTrash = faTrash;
  faPencilAlt = faPencilAlt;

  task: Task = {
    id: 1,
    taskDescription: 'testando 123'
  };

  constructor() { }

  ngOnInit(): void {
  }

  


}
