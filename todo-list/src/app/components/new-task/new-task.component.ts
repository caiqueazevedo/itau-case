import { TasksService } from './../../services/tasks.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  @Input() taskDescription: string = '';
  @Input() taskList: string[] = [];

  savedTask = '';

  constructor(private tasksService: TasksService) { }

   ngOnInit(): void {
  }

  saveTask(task: any){
    this.savedTask = task;
    this.tasksService.create(this.savedTask);
  }

}
