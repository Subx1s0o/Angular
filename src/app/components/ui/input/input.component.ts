import { Component, Input } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() task = '';
  constructor(private readonly taskService: TaskService) {}

  addTask() {
    this.taskService.addTask(this.task);
    this.task = '';
  }
}
