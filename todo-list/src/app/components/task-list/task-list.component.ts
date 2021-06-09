import { Component, OnInit } from '@angular/core';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent implements OnInit {

  faTrash = faTrash;
  faPencilAlt = faPencilAlt;
  constructor() { 
  }

  ngOnInit(): void {
  }

  removeTask(){}
}
