import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Plog } from '@gpeel/plog';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  template: '<h2>{{ title() }} app is running!</h2>\n',
})
export class App {
   title = signal('gpeel-plog-ng22');

  constructor() {
    Plog.info('My info!', 'info2', 'info3');
    Plog.warn('My Warn!');
    Plog.error('My Error!');
    Plog.perf('computing for 34 times');
    Plog.ngOnChanges('To test no css');
    Plog.ngOnInit('To test test');
  }
}
