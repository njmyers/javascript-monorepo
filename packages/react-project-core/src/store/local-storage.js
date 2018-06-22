const loadLocalApplication = () => {
    try {
        const serializedState = localStorage.getItem('application');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const saveLocalApplication = (application) => {
    try {
        const serializedState = JSON.stringify(application);
        localStorage.setItem('application', serializedState);
    } catch (err) {}
};

export { loadLocalApplication, saveLocalApplication };
