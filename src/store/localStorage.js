export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return console.log('localStorage is empty');
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return console.log('some error in load');
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        return console.log('some error in save');
    }
};