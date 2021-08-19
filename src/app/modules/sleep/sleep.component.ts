import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DURATION_INCREMENTS, Duration, DurationConfig } from '../../shared/constants/duration';
import { SleepService } from './sleep.service';

@Component({
    selector: 'app-sleep',
    templateUrl: './sleep.component.html',
    styleUrls: ['./sleep.component.scss']
})
export class SleepComponent implements OnInit {

    constructor(private sleepService: SleepService) { }

    durationIncrements = DURATION_INCREMENTS;
    durationInBed: object;
    durationAsleep: object;
    localResponse: Observable<object>
    score: string;


    inBedForm: DurationConfig = {
        label: 'Duration in bed',
        formGroup: 'bedForm',
        formControl: 'durationInBed'
    }

    sleepForm: DurationConfig = {
        label: 'Duration asleep',
        formGroup: 'sleepForm',
        formControl: 'durationSleeping'
    }

    ngOnInit(): void {

        this.sleepService.currentResponse.subscribe(response => {
            console.log('subject', response);
            this.localResponse = response;
        })

    }

    getBedForm($event: object) {
        this.durationInBed = $event;
    }

    getAsleepForm($event: object) {
        this.durationAsleep = $event;
    }

    // create function to calculate score
    calculateScore() {
        let durationInBed = Object.values(this.durationInBed);
        let durationAsleep = Object.values(this.durationAsleep);
        durationInBed = durationInBed.map(Number);
        durationAsleep = durationAsleep.map(Number);

        this.score = (100 * durationAsleep[0] / durationInBed[0]).toFixed(2)
        console.log('score', this.score );
       

        this.sleepService.postSleepDuration(this.score, true)
            .subscribe(value => console.log('value', value))
    }

}
