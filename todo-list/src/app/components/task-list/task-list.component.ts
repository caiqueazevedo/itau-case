import { TasksService } from './../../services/tasks.service';
import { Component, Input, OnInit } from '@angular/core';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../entities/task'

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent implements OnInit {

  @Input() state: any;

  faTrash = faTrash;
  faPencilAlt = faPencilAlt;
  taskList: any[] = [
   ' this.state.',
    'another task'
  ] ;

  constructor(private taskService: TasksService) { 
  }

  ngOnInit(): void {
  }

  removeTask(){}
}
