import { Component } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-button',
  imports: [HighlightDirective],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  ngOnInit() {
    console.log('init');
  }
}
