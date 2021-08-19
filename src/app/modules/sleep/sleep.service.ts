import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError, Subject} from 'rxjs';
import { mockError } from '../../shared/utils/error';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class SleepService {
    private endpoint = '';
    private sleepResponse = new Subject<any>();
    private loading = new Subject<any>();

    currentResponse = this.sleepResponse.asObservable();
    loadingResponse = this.loading.asObservable();
  
    constructor(private http: HttpClient) { }

    public postSleepDuration(score: string, forceResponse?: boolean, errorCode?: number): Observable<any | HttpErrorResponse> {

        if (forceResponse === undefined) {
            return this.http.post<any>(this.endpoint, score );
        } else {
            const accounts = RESULTS_MOCK;
            const mockedError = mockError(errorCode);

            return of(accounts).pipe(
                tap(response => {
                    this.sleepResponse.next(response),
                    this.loading.next(false)
                }),
                catchError(error => 
                    throwError(mockedError) )
            )
        }
    }
}

const RESULTS_MOCK: any = {
    count: 1,
    next: null,
    previous: null,
    status: 200,
    results: [
        {
            id: "1",
            name: "Asleep and in bed results"
        }
    ]
}


