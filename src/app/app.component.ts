import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeadlineCountdown } from './deadline-countdown/deadline-countdown.component';

@Component({
  imports: [DeadlineCountdown],
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('deadline-app');
}
