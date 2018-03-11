import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';

import createEventSubscription from './create-event-subscription';

const createWindowSubscription = createEventSubscription(window);

export const resizeWindow = createWindowSubscription('resize')(debounce, 400);
export const scrollWindow = createWindowSubscription('scroll')(throttle, 400);
