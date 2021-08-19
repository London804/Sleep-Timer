import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { SleepComponent } from './sleep.component';
import { SleepService } from './sleep.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

xdescribe('SleepComponent', () => {
    let component: SleepComponent;
    let fixture: ComponentFixture<SleepComponent>;
    let sleepServiceMock: { postSleepDuration: () => void; };
    let data: object;

    beforeEach(async () => {
        sleepServiceMock = {
            postSleepDuration: () => { }
        }
        await TestBed.configureTestingModule({
        declarations: [ SleepComponent ],
        providers: [
            {
            provide: SleepService,
            useValue: sleepServiceMock
            },
        ],
            imports: [[HttpClientTestingModule]]
        })
        .compileComponents();
        TestBed.overrideProvider(SleepService, { useValue: sleepServiceMock });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SleepComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // it('should return observable', () => {
    //     spyOn(sleepServiceMock, 'postSleepDuration').and.returnValue(Observable.of(data))
    // })

});


