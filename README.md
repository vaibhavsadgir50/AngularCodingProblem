# DeadlineApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.5.

# Deadline Countdown (Angular)

Displays "Seconds left to deadline: X", updated every second.

## Run
npm install
node mock-server.js          # terminal 1 (mock /api/deadline)
ng serve --proxy-config proxy.conf.json   # terminal 2

## Design decisions
- One HTTP call; result cached with shareReplay.
- Computes end time once, then reads Date.now() each tick (no drift in background tabs).
- OnPush + async pipe: no manual unsubscribe, minimal change detection.
- Clamps at 0 and completes the timer.
- Copy-paste: only deadline.ts and deadline-countdown/* are needed in another project.ormation on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
