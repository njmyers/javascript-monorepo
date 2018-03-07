import { Observable } from 'rxjs/Observable';
import { debounceTime, throttleTime } from 'rxjs/operators';
import 'rxjs/add/observable/fromEvent';

export default (object) => (event) => Observable.fromEvent(object, event);
