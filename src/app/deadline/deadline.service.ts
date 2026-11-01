import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {
  distinctUntilChanged,
  map,
  Observable,
  retry,
  shareReplay,
  switchMap,
  takeWhile,
  timer,
} from 'rxjs';

interface DeadlineResponse {
  secondsLeft: number;
}

@Injectable({ providedIn: 'root' })
export class Deadline {
  private readonly http = inject(HttpClient);

  // One HTTP call. The result is cached and shared by all subscribers.
  private readonly endTime$: Observable<number> = this.http
    .get<DeadlineResponse>('/api/deadline')
    .pipe(
      retry(2),
      map((r) => Date.now() + r.secondsLeft * 1000),
      shareReplay({ bufferSize: 1, refCount: false })
    );

  // Emits the seconds left, once per second, and completes at 0.
  readonly secondsLeft$: Observable<number> = this.endTime$.pipe(
    switchMap((end) =>
      timer(0, 1000).pipe(
        map(() => Math.max(0, Math.ceil((end - Date.now()) / 1000))),
        distinctUntilChanged(),
        takeWhile((s) => s > 0, true)
      )
    )
  );
}