import { debounce } from 'smalldash/build/async';
import createEventSubscription from './create-event-subscription';

const createWindowSubscription = createEventSubscription(window);

export const resizeWindow = createWindowSubscription('resize')(debounce, 400);
export const scrollWindow = createWindowSubscription('scroll')(debounce, 400);
