import type {BaseTheme, CSSColor, Theme} from '../utils/types/theme';

const darkColors: Record<keyof Theme['colors'], CSSColor> = {
    fg: '#eeeeee',
    bg: '#161616',
    dimmed: '#bbbbbb',
    area: '#303030',
    accent: '#36AEF1',
    success: '#9DD357',
    error: '#EB586A',
};

export const darkTheme: BaseTheme = {
    fonts: {
        ui: 'normal 400 1em Inter, sans-serif',
        mono: 'normal 400 1em Menlo, Monaco, monospace',
        button: 'normal 700 1em Inter, sans-serif',
        heading: 'normal 700 1em Inter, sans-serif',
        content: 'normal 400 1em Inter, serif',
        boldContent: 'normal 700 1em Inter, serif',
    },

    colors: darkColors,

    scrollbar: {
        thumb: '#333333',
        _hover: {
            thumb: '#444444',
        },
    },

    card: {
        radius: '1rem',
        bg: darkColors.area,
    },

    backdrop: {
        blur: '5px',
        color: '#00000066',
    },

    input: {
        fg: darkColors.fg,
        radius: '0.5rem',
        border: '2px solid transparent',
        bg: darkColors.area,
        transition: '.3s',

        _hover: {
            bg: '#555555',
        },

        _focus: {
            border: `2px solid ${darkColors.accent}`,
            bg: '#555555',
        },
    },
    button: {
        fg: '#222222',
        radius: '0.5rem',
        border: 'none',
        bg: darkColors.accent,
        transition: '.3s',

        _hover: {
            translate: '0 -0.1em',
        },

        _focus: {
            translate: '0 0.2em',
        },
        _disabled: {
            opacity: '0.3',
        },
    },
    toggle: {
        radius: '2rem',
        border: '2px solid transparent',
        bg: darkColors.area,
        transition: '.3s',
        _checked: {
            radius: '2rem',
            border: '2px solid transparent',
            bg: '#00B2FF',
        },
        thumb: {
            radius: '50%',
            bg: '#ffffff',
            shadow: '0em 2em 5em 0em #f00',
        },
    },
    checkbox: {
        fg: '#ffffff',
        radius: '0.5em',
        bg: darkColors.area,
        transition: '.3s',
        _checked: {
            bg: darkColors.accent,
        },
        _disabled: {
            fg: '#888888',
            bg: '#333333',
        },
    },
};

const lightColors: Record<keyof Theme['colors'], CSSColor> = {
    fg: '#333333',
    bg: '#ffffff',
    dimmed: '#888888',
    area: '#dddddd',
    accent: '#36AEF1',
    success: '#9DD357',
    error: '#EB586A',
};

export const lightTheme: BaseTheme = {
    fonts: {
        ui: 'normal 400 1em Inter, sans-serif',
        mono: 'normal 400 1em Menlo, Monaco, monospace',
        button: 'normal 700 1em Inter, sans-serif',
        heading: 'normal 700 1em Inter, sans-serif',
        content: 'normal 400 1em Inter, serif',
        boldContent: 'normal 700 1em Inter, serif',
    },

    colors: lightColors,

    scrollbar: {
        thumb: '#eeeeee',
        _hover: {
            thumb: '#dddddd',
        },
    },

    card: {
        radius: '1rem',
        bg: lightColors.area,
    },

    backdrop: {
        blur: '5px',
        color: '#00000044',
    },

    input: {
        fg: lightColors.fg,
        radius: '0.5rem',
        border: '2px solid transparent',
        bg: lightColors.area,
        transition: '.3s',

        _hover: {
            bg: '#cccccc',
        },

        _focus: {
            border: `2px solid ${lightColors.accent}`,
            bg: '#cccccc',
        },
    },
    button: {
        fg: '#eeeeee',
        radius: '0.5rem',
        border: 'none',
        bg: lightColors.accent,
        transition: '.3s',

        _hover: {translate: '0 -0.1em'},
        _focus: {translate: '0 0.2em'},
        _disabled: {
            opacity: '0.3',
        },
    },
    toggle: {
        radius: '2rem',
        border: '2px solid transparent',
        bg: lightColors.area,
        transition: '.3s',
        _checked: {
            radius: '2rem',
            border: '2px solid transparent',
            bg: '#00B2FF',
        },
        thumb: {
            radius: '50%',
            bg: '#ffffff',
            shadow: '0em 2em 5em 0em #f00',
        },
    },
    checkbox: {
        fg: '#ffffff',
        radius: '0.5em',
        bg: lightColors.area,
        transition: '.3s',
        _checked: {
            bg: lightColors.accent,
        },
        _disabled: {
            fg: '#aaaaaa',
            bg: '#eeeeee',
        },
    },
};
