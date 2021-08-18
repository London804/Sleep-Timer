import { Component } from '@angular/core';
import { DURATION_INCREMENTS, Duration } from './shared/constants/duration';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'sleepTimer';
    durationIncrements = DURATION_INCREMENTS
}
