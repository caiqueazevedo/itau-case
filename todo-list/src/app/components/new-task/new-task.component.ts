import { Observable } from 'rxjs';
import { TaskDTO } from './../../api/models/task-dto';
import { Component, OnInit } from '@angular/core';
import { TaskControllerService } from 'src/app/api/services';
import { Task } from 'src/app/api/models';

@Component({
  selector: 'new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  taskDescription: string = '';
  task: TaskDTO = {};

  constructor(private service: TaskControllerService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.task.taskDescription = this.taskDescription;
    this.service.saveUsingPOST(this.task)
      .subscribe();
  }


}
