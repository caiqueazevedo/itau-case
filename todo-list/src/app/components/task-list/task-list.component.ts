import { Task } from 'src/app/api/models';
import { TaskDTO } from './../../api/models/task-dto';
import { Component, OnInit } from '@angular/core';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { empty, Observable, Subject } from 'rxjs';
import { TaskControllerService } from 'src/app/api/services';
import { catchError, take, tap } from 'rxjs/operators';


@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent implements OnInit {

  taskList$: Observable<TaskDTO[]>;
  error$ = new Subject();

  faTrash = faTrash;
  faPencilAlt = faPencilAlt;

  constructor(private taskService: TaskControllerService) {
  }

  ngOnInit(): void {
    this.taskList$ = this.taskService.indexUsingGET()
      .pipe(
        tap(
          value => console.log(this.taskList$, value)
        ),
        take(1),
        catchError(error => {
          console.error(error);
          this.error$.next(true);
          return empty();
        })
      );
  }

  delete(task: TaskDTO) {
    this.taskService.delete(task.id).subscribe();
    this.taskList$
    this.updateList();
  };

  updateList() {
    this.taskList$ = this.taskService.indexUsingGET();
    this.ngOnInit();
  }
}
