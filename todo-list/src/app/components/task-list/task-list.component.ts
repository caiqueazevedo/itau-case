import { TaskDTO } from './../../api/models/task-dto';
import { Component, OnInit } from '@angular/core';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { Task } from 'src/app/api/models';
import { TaskControllerService } from 'src/app/api/services';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent implements OnInit {

  taskList: TaskDTO[] = [];

  faTrash = faTrash;
  faPencilAlt = faPencilAlt;

  constructor(private taskService: TaskControllerService) { 
  }

  ngOnInit(): void {
    this.taskService.indexUsingGET()
      .subscribe(
        res => this.taskList = res)
  }

}
