import {css} from '@emotion/react';
import {themeConst} from './types/theme';

export const scrollbar = css`
    scrollbar-width: thin;
    scrollbar-color: transparent;

    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;

        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        transition: background-color 0.3s;
        border-radius: 3px;
        background-color: ${themeConst('theme:scrollbar.thumb')};
    }

    ::-webkit-scrollbar-thumb:hover {
        border-radius: 3px;
        background-color: ${themeConst('theme:scrollbar._hover.thumb')};
    }

    ::-webkit-scrollbar-button {
        width: 0;
        height: 0;
        display: none;
    }

    ::-webkit-scrollbar-corner {
        background-color: transparent;
    }
`;
