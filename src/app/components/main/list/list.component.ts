import { Component } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-list',
  imports: [ButtonComponent],
  templateUrl: './list.component.html',
})
export class ListComponent {
  tasks: string[] | null = null;
  constructor(private readonly taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }
}
