import { Component } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
