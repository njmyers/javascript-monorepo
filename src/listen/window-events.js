import * as __ from 'smalldash';
import createEventSubscription from './create-event-subscription';

const createWindowSubscription = createEventSubscription(window);

export const resizeWindow = createWindowSubscription('resize')(__.debounce, 400);
export const scrollWindow = createWindowSubscription('scroll')(__.debounce, 400);
