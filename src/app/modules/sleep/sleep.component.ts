import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DURATION_INCREMENTS, DurationConfig } from '../../shared/constants/duration';
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
    scoreSubscription: Subscription
    loading: boolean;
    loadingSubscription: Subscription;

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

        this.scoreSubscription = this.sleepService.currentResponse.subscribe(response => {
            this.localResponse = response;
        })

        this.loadingSubscription = this.sleepService.loadingResponse.subscribe(response => {
            this.loading = response;
        })

    }

    getBedForm($event: object) {
        this.durationInBed = $event;
    }

    getAsleepForm($event: object) {
        this.durationAsleep = $event;
    }

    calculateScore() {
        let durationInBed = Object.values(this.durationInBed);
        let durationAsleep = Object.values(this.durationAsleep);
        durationInBed = durationInBed.map(Number);
        durationAsleep = durationAsleep.map(Number);

        this.score = (100 * durationAsleep[0] / durationInBed[0]).toFixed(2)

        this.loading = true;
       
        // setTimeout to simulate actual call and show loader
        setTimeout(() => {     
            this.sleepService.postSleepDuration(this.score, true)
                .subscribe(value => value)
        }, 800);
    }

    ngOnDestroy() {
        this.loadingSubscription.unsubscribe();
        this.scoreSubscription.unsubscribe();
    }

}
