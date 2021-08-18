import { Component, OnInit } from '@angular/core';
import { DURATION_INCREMENTS, Duration, DurationConfig } from '../../shared/constants/duration';

@Component({
    selector: 'app-sleep',
    templateUrl: './sleep.component.html',
    styleUrls: ['./sleep.component.scss']
})
export class SleepComponent implements OnInit {

    constructor() { }

    durationIncrements = DURATION_INCREMENTS;
    durationInBed: object;
    durationAsleep: object;


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

        console.log(this.durationAsleep)

    }

    getBedForm($event: object) {
        this.durationInBed = $event;
        console.log('durationInBed', this.durationInBed);
    }

    getAsleepForm($event: object) {
        this.durationAsleep = $event;
        console.log('durationAsleep', this.durationAsleep);
    }

    // create function to calculate score
    calculateScore() {
        console.log('calculate Score')
    }

}
