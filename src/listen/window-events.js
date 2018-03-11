import _ from 'lodash';
import createEventSubscription from './create-event-subscription';

const createWindowSubscription = createEventSubscription(window);

export const resizeWindow = createWindowSubscription('resize')(_.debounce, 400);
export const scrollWindow = createWindowSubscription('scroll')(_.throttle, 400);
