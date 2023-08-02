import {css} from '@emotion/react';
import {themeProp} from '../../utils/types/theme';

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
        background-color: ${themeProp('theme:scrollbar.thumb', `hsla(0, 0%, 50%, 0.2)`)};
    }

    ::-webkit-scrollbar-thumb:hover {
        border-radius: 3px;
        background-color: ${themeProp('theme:scrollbar.hover.thumb', `hsla(0, 0%, 50%, 0.3)`)};
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
