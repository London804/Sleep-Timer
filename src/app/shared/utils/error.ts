import { HttpErrorResponse } from "@angular/common/http";

export function mockError(code?: number) {
    return new HttpErrorResponse({
        error: null,
        status: code,
        statusText: 'There was an error returning your request please try again',
        url: 'https://yourWebsiteGoesHere.com/',
    });
}
