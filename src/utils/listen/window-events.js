import { debounceTime, throttleTime } from 'rxjs/operators';
import createEventObservable from './create-event-observable';

const createWindowObservable = createEventObservable(window);

export const resizeWindow = createWindowObservable('resize').pipe(debounceTime(500));
export const scrollWindow = createWindowObservable('scroll').pipe(throttleTime(400));
