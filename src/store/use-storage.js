const hour = 1000 * 60 * 60;
const day = 1000 * 60 * 60 * 24;
const week = 1000 * 60 * 60 * 24 * 7;

/**
 * Function for logic of when to use persisted state
 * @param {number} refresh amount of milliseconds since last visit to allow caches
 * @param {number} invalidate date in future upon which to stop invalidating all caches
 * @param {number} stateDate datestamp from persisted state cache
 */
export const useStorageStub = (refresh) => (invalidate) => (stateDate) => {
	return Date.now() - stateDate < refresh && invalidate < stateDate;
};

/**
 * Function to automatically link invalidation to refresh rate
 * @param {number} refresh amount of milliseconds since last visit to allow caches
 * @param {number} invalidate date.now() literal point in time to invalidate all caches for returning visitors
 */
const useStorage = (refresh, invalidate) => useStorageStub(refresh)(invalidate + refresh);

export default useStorage;
