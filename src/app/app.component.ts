import { Component } from '@angular/core';
import { ListComponent } from './components/main/list/list.component';
import { InputComponent } from './components/ui/input/input.component';
@Component({
  selector: 'app-root',
  imports: [ListComponent, InputComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
