export class Task {
  id: number;
  taskName: string;
  task: string;

  constructor(id: number, taskName: string, task: string) {
    this.id = id;
    this.taskName = taskName;
    this.task = task;
  }
}
