import type {Theme} from '../joy';

export const dark: Theme = {
    font: {
        ui: 'normal 400 1em Inter, sans-serif',
        mono: 'normal 400 1em Menlo, Monaco, monospace',
        button: 'normal 700 1em Inter, sans-serif',
        heading: 'normal 700 1em Inter, sans-serif',
        content: 'normal 400 1em Inter, serif',
        boldContent: 'normal 700 1em Inter, serif',
    },

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
    font: {
        ui: 'normal 400 1em Inter, sans-serif',
        mono: 'normal 400 1em Menlo, Monaco, monospace',
        button: 'normal 700 1em Inter, sans-serif',
        heading: 'normal 700 1em Inter, sans-serif',
        content: 'normal 400 1em Inter, sans-serif',
        boldContent: 'normal 700 1em Inter, sans-serif',
    },

    foreground: '#444444',
    subForeground: '#888888',
    background: '#ffffff',
    subBackground: '#eeeeee',

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

export const academic: Theme = {
    font: {
        ui: 'normal 400 1em Alegreya, serif',
        mono: 'normal 400 1em monospace',
        button: 'normal 700 1em Alegreya, serif',
        heading: 'normal 700 1em Alegreya, serif',
        content: 'normal 400 1em Alegreya, serif',
        boldContent: 'normal 700 1em Alegreya, serif',
    },

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
        border: '1px solid #c8c0bc',
        background: '#ffffff',
        transition: '.3s',

        hover: {
            radius: '0rem',
            border: '1px solid #222222',
            background: '#ffffff',
        },

        focus: {
            radius: '0rem',
            border: '1px solid #222222',
            background: '#ffffff',
        },
    },
    button: {
        color: '#ffffff',
        radius: '0',
        border: 'none',
        background: '#a92e12',
        transition: '.3s',

        hover: {
            color: '#ffffff',
            radius: '0',
            border: 'none',
            background: '#222222',
        },

        focus: {
            color: '#ffffff',
            radius: '0',
            border: 'none',
            background: '#222222',
            scale: '0.98',
        },
    },
};

export const kids: Theme = {
    font: {
        ui: 'normal 400 1em Quicksand, sans-serif',
        mono: 'normal 400 1em monospace',
        button: 'normal 700 1em Quicksand, sans-serif',
        heading: 'normal 700 1em Quicksand, sans-serif',
        content: 'normal 400 1em Quicksand, sans-serif',
        boldContent: 'normal 700 1em Quicksand, sans-serif',
    },

    foreground: '#222222',
    subForeground: '#888888',
    background: '#ECF8FF',
    subBackground: '#eadacf',

    brand: '#5061FF',

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
        thumb: '#B4D5E8',
        hover: {
            thumb: '#95bad0',
        },
    },

    card: {
        radius: '1.5em',
        border: '3px solid #B4D5E8',
        background: '#ffffff',
    },

    input: {
        color: '#222222',
        radius: '1.5em',
        border: '3px solid #B4D5E8',
        background: '#ffffff',
        transition: '.3s',

        hover: {
            radius: '1.2em',
            background: '#ffffff',
            border: '3px solid #B4D5E8',
        },

        focus: {
            radius: '1.2em',
            background: '#ffffff',
            border: '3px solid #5061FF',
        },
    },
    button: {
        color: '#ffffff',
        radius: '3em',
        shadow: '0em 0.2em 0em 0em #3743b5',
        background: '#5061FF',
        transition: '.3s',
        translate: '0 -0.2em',

        hover: {
            color: '#ffffff',
            radius: '3em',
            shadow: '0em 0.2em 0em 0em #3743b5',
            background: '#5061FF',
            translate: '0 -0.2em',
        },

        focus: {
            color: '#ffffff',
            radius: '3rem',
            background: '#3743b5',
        },
    },
};
