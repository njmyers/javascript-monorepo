export const TIMESTAMP = new Date();
export const REFRESH = 1000 * 60 * 60;

export function ensureDateObject(inputDate) {
    let dateObject;
    if (inputDate instanceof Date) dateObject = inputDate;
    else if (typeof inputDate === 'string') dateObject = new Date(inputDate);

    return dateObject;
}

export function writtenDateShort(inputDate) {
    let dateObject = ensureDateObject(inputDate);
    return dateObject.toDateString().slice(4);
}

export const months = {
    en: [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december',
    ],
};

export const days = {
    en: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
};

export const dates = {
    shortest: createNumberedList(28, 1),
    leap: createNumberedList(29, 1),
    short: createNumberedList(30, 1),
    long: createNumberedList(31, 1),
};

// keep at top todays date
export const today = new Date();
export const todayString = today.toISOString();
export const todayYear = today.getFullYear();
export const todayMonth = today.getMonth();
export const todayMonthString = months.en[today.getMonth()];
export const todayDate = today.getDate();
export const todayHours = today.getHours();
export const years = presentYears(5);
export const hours = createNumberedList(23);
export const minutes = [0, 15, 30, 45];

export function timeStamp() {
    return new Date();
}

// 15 minutes
export const refresh = 1000 * 60 * 15;

function createNumberedList(x, start = 0) {
    let arr = [];

    for (var i = start; i <= x; i++) {
        arr.push(i);
    }

    return arr;
}

function presentYears(num) {
    let years = today.getFullYear();
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push(years + i);
    }

    return arr;
}

export function monthAndYearString(string) {
    const date = ensureDateObject(string);

    return `${months.en[date.getMonth()]}, ${date.getFullYear()}`;
}
