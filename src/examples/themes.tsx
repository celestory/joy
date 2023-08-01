import type {Theme} from '../joy';

export const dark: Theme = {
    mainFont: 'sans-serif',
    titleFont: 'sans-serif',
    textFont: 'serif',

    foreground: '#eeeeee',
    subForeground: '#bbbbbb',
    background: '#161616',
    subBackground: '#252525',

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
