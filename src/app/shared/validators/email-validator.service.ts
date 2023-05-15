import { Injectable } from '@angular/core';
import {
  AsyncValidator,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of, delay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidatorService implements AsyncValidator {
  constructor() {}
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>(
      (subscriber) => {
        if (email === 'rafa@google.com') {
          subscriber.next({ emailTaken: true });
          subscriber.complete();
          return;
        }
        subscriber.next(null);
        subscriber.complete();
      }
    ).pipe(delay(1500));
    return httpCallObservable;
  }
}
