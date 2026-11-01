import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Deadline } from '../deadline/deadline.service';

@Component({
  selector: 'app-deadline-countdown',
  imports: [AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './deadline-countdown.component.html',
})
export class DeadlineCountdown {
  protected readonly secondsLeft$ = inject(Deadline).secondsLeft$;
}