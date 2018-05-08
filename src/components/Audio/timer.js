import { Observable } from 'rxjs/Observable';

const withinThreshold = (thresh) => (sum, max) => {
    return sum > max ? true : max - sum < thresh;
};

const timer = (length = 1000, thresh = 4, rate = 100) => {
    const validate = withinThreshold(thresh);

    return Observable.create((observer) => {
        const cache = {
            prev: new Date(),
            timer: 0,
        };

        const interval = setInterval((curr = new Date()) => {
            const sum = cache.timer + (curr - cache.prev);
            const valid = validate(sum, length);
            if (valid) observer.next({ ...cache, sum });
            cache.timer = valid ? 0 : sum;
            cache.prev = curr;
        }, rate);

        return () => clearInterval(interval);
    });
};

export default timer;
