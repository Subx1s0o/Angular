import { Component, Input } from '@angular/core';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'delete-button',
  imports: [],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() task = '';
  constructor(private readonly taskService: TaskService) {}

  deleteTask(task: string) {
    this.taskService.deleteTask(task);
  }
}
