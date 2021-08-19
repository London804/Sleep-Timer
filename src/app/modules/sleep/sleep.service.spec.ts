import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SleepService } from './sleep.service';

describe('SleepService', () => {
    let service: SleepService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(SleepService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
