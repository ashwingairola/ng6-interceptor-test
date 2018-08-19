import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpErrorResponse,
    HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from '../../../node_modules/rxjs/operators';
import { Router } from '../../../node_modules/@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap(
                // Success callback; do nothing
                (event: HttpEvent<any>) => {
                    if(event instanceof HttpResponse) {
                        console.log(event.status);
                    }
                },
                // Error callback
                (error: any) => {
                    if(error instanceof HttpErrorResponse) {
                        console.log('Error callback');
                        console.log(error.status);
                        this.router.navigate(['error']);
                    }
                }
            )
        )
    }
}
