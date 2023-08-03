import type {Theme} from '../joy';

export const dark: Theme = {
    mainFont: 'sans-serif',
    titleFont: 'sans-serif',
    textFont: 'serif',

    foreground: '#eeeeee',
    subForeground: '#bbbbbb',
    background: '#161616',
    subBackground: '#252525',

    brand: '#00B2FF',

    red: '#F55A50',
    blue: '#00B2FF',
    lime: '#9CEF15',
    gray: '#AAAAAA',
    pink: '#FFA0B7',
    white: '#FFFFFF',
    black: '#121212',
    green: '#00DF74',
    indigo: '#5061FF',
    orange: '#FF9A62',
    purple: '#A55FFE',
    yellow: '#F9CC30',
    magenta: '#F54E9E',
    turquoise: '#00E5D8',

    scrollbar: {
        thumb: '#333333',
        hover: {
            thumb: '#444444',
        },
    },

    card: {
        radius: '1rem',
        background: '#222222',
    },

    input: {
        color: '#eeeeee',
        radius: '0.5rem',
        border: '2px solid transparent',
        background: '#444444',
        transition: '.3s',

        hover: {
            radius: '0.5rem',
            border: '2px solid transparent',
            background: '#555555',
        },

        focus: {
            radius: '0.5rem',
            border: '2px solid #00B2FF',
            background: '#444444',
        },
    },
    button: {
        color: '#222222',
        radius: '0.5rem',
        border: 'none',
        background: '#00B2FF',
        transition: '.3s',

        hover: {
            color: '#222222',
            radius: '0.5rem',
            border: 'none',
            background: '#4ecaff',
        },

        focus: {
            color: '#222222',
            radius: '0.5rem',
            border: 'none',
            background: '#00B2FF',
            translate: '0 0.2em',
        },
    },
};

export const light: Theme = {
    mainFont: 'sans-serif',
    titleFont: 'sans-serif',
    textFont: 'serif',

    foreground: '#444444',
    subForeground: '#888888',
    background: '#eeeeee',
    subBackground: '#dddddd',

    brand: '#00B2FF',

    red: '#F55A50',
    blue: '#00B2FF',
    lime: '#9CEF15',
    gray: '#AAAAAA',
    pink: '#FFA0B7',
    white: '#FFFFFF',
    black: '#121212',
    green: '#00DF74',
    indigo: '#5061FF',
    orange: '#FF9A62',
    purple: '#A55FFE',
    yellow: '#F9CC30',
    magenta: '#F54E9E',
    turquoise: '#00E5D8',

    scrollbar: {
        thumb: '#dddddd',
        hover: {
            thumb: '#cccccc',
        },
    },

    card: {
        radius: '1rem',
        background: '#dddddd',
    },

    input: {
        color: '#444444',
        radius: '0.5rem',
        border: '2px solid transparent',
        background: '#dddddd',
        transition: '.3s',

        hover: {
            radius: '0.5rem',
            border: '2px solid transparent',
            background: '#cccccc',
        },

        focus: {
            radius: '0.5rem',
            border: '2px solid #00B2FF',
            background: '#cccccc',
        },
    },
    button: {
        color: '#ffffff',
        radius: '0.5rem',
        border: 'none',
        background: '#00B2FF',
        transition: '.3s',

        hover: {
            color: '#ffffff',
            radius: '0.5rem',
            border: 'none',
            background: '#4ecaff',
        },

        focus: {
            color: '#ffffff',
            radius: '0.5rem',
            border: 'none',
            background: '#00B2FF',
            translate: '0 0.2em',
        },
    },
};

export const luxe: Theme = {
    mainFont: 'sans-serif',
    titleFont: 'sans-serif',
    textFont: 'serif',

    foreground: '#222222',
    subForeground: '#888888',
    background: '#eee6e1',
    subBackground: '#eadacf',

    brand: '#a92e12',

    red: '#F55A50',
    blue: '#00B2FF',
    lime: '#9CEF15',
    gray: '#AAAAAA',
    pink: '#FFA0B7',
    white: '#FFFFFF',
    black: '#121212',
    green: '#00DF74',
    indigo: '#5061FF',
    orange: '#FF9A62',
    purple: '#A55FFE',
    yellow: '#F9CC30',
    magenta: '#F54E9E',
    turquoise: '#00E5D8',

    scrollbar: {
        thumb: '#d4ccc7',
        hover: {
            thumb: '#c8c0bc',
        },
    },

    card: {
        radius: '0',
        background: '#dad2cd',
    },

    input: {
        color: '#222222',
        radius: '0rem',
        border: '3px solid #c8c0bc',
        background: '#eee6e1',
        transition: '.3s',

        hover: {
            radius: '0rem',
            border: '3px solid #222222',
            background: '#eee6e1',
        },

        focus: {
            radius: '0rem',
            border: '3px solid #222222',
            background: '#eee6e1',
        },
    },
    button: {
        color: '#222222',
        radius: '0',
        border: '3px solid #222222',
        background: 'transparent',
        transition: '.3s',

        hover: {
            color: '#ffffff',
            radius: '0',
            border: '3px solid #222222',
            background: '#222222',
        },

        focus: {
            color: '#ffffff',
            radius: '0',
            border: '3px solid #ffffff',
            background: '#222222',
        },
    },
};
