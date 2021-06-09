import { TaskDTO } from './../../api/models/task-dto';
import { Component, OnInit } from '@angular/core';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subject } from 'rxjs';
import { TaskControllerService } from 'src/app/api/services';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent implements OnInit {

  taskList$: Observable<TaskDTO[]>;
  error$ = new Subject();
  taskForm: FormGroup;
  taskDescription: string = '';

  faTrash = faTrash;

  constructor(private taskService: TaskControllerService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      taskDescription: ['', [Validators.required, Validators.minLength(3)]]
    })

    this.taskList$ = this.taskService.indexUsingGET()
      .pipe(first());

    console.log(this.taskList$)
  }

  reload() {
    this.taskList$ = this.taskService.indexUsingGET();
  }

  onSubmit() {
    this.taskService.saveUsingPOST(this.taskForm.value.taskDescription)
      .subscribe(() => {
        this.taskList$ = this.taskService.indexUsingGET()
      });
  }

  updateTask(task: TaskDTO) {
    console.log(task)
    this.taskService.updateUsingPUT(task).subscribe(() => {
      this.taskList$ = this.taskService.indexUsingGET()
    });
  }

  delete(task: TaskDTO) {
    this.taskService.deleteUsingDELETE(task.id as string)
      .pipe(first())
      .subscribe(() => {
        this.taskList$ = this.taskService.indexUsingGET()
      });
  };
}