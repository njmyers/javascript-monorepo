/** @flow  */
import SubPub from './SubPub';

type EventType = 'resize' | 'scroll';

const listeners = new Map();

const getOptions = (eventType: EventType) =>
  eventType === 'scroll' ? { throttle: true } : {};

/**
 * We create window listeners lazily using this function.
 * This allows us to refrain from using the window object until componentDidMount lifecycle method.
 * Partial application to the listeners reference object so we don't create more then one of the same type of listener.
 * @param {object} listeners cache storage for already created window listeners
 * @param {string} eventType which window event to create a listener for
 */
function LazyEvent(eventType: EventType) {
  const options = getOptions(eventType);

  if (!listeners.has(eventType)) {
    listeners.set(eventType, new SubPub(eventType, options));
  }

  return listeners.get(eventType);
}

export default LazyEvent;
