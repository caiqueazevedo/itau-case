import { Task } from './../../entities/task';
import { TasksService } from './../../services/tasks.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  @Input() task = Task;

  savedTask = '';

  constructor(private tasksService: TasksService) { }

   ngOnInit(): void {
  }


}
