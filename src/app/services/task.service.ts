import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: string[] = [];

  constructor() {}

  addTask(task: string) {
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }

  deleteTask(task: string) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }
}
