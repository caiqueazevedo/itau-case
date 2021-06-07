import { TasksService } from './../../services/tasks.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../entities/task'

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
    taskDescription: ''
  };

  constructor(private taskService: TasksService) { 
  }

  ngOnInit(): void {
  }

  removeTask(){}
}
