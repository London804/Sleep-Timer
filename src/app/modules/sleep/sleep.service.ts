import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of, throwError, BehaviorSubject, Subject} from 'rxjs';
import { mockError } from '../../shared/utils/error';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class SleepService {
    private endpoint = '';
    private sleepResponse = new Subject<any>();
    currentResponse = this.sleepResponse.asObservable();
  
    constructor(private http: HttpClient) { }

    public postSleepDuration(score: string, forceResponse?: boolean, errorCode?: number): Observable<any | HttpErrorResponse> {

        if (forceResponse === undefined) {
            return this.http.post<any>(this.endpoint, score );
        } else {
            const accounts = RESULTS_MOCK;
            const error = mockError(errorCode);

            // return !!forceResponse ? of(accounts) : throwError(error);

            return of(accounts).pipe(
                tap(response => {
                    this.sleepResponse.next(response)
                }),
                catchError(error => 
                    throwError(error) )
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
            name: "Asleep and In bed results"
        }
    ]
}


