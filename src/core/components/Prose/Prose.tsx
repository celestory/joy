import styled from '@emotion/styled';
import {Box} from '../Box/Box';
import {themeConst} from '../../utils/types/theme';

export const Prose = styled(Box)`
    @media (max-width: 600px) {
        font-size: 0.9em;
    }
    h2 {
        font-size: 2.2em;
        margin-bottom: 0;
    }
    h3 {
        font-size: 1.6em;
        margin-bottom: 0;
    }
    ol,
    ul,
    p {
        color: ${themeConst('theme:colors.dimmed')};
        font-family: ${themeConst('theme:fonts.content')};
        line-height: 1.7;
        font-size: 1.2em;
        font-weight: 400;
        margin-top: 0.6rem;
        margin-bottom: 0.8rem;
    }

    strong {
        color: ${themeConst('theme:colors.fg')};
    }

    blockquote {
        margin: 0;
        margin-left: 10px;
        padding: 10px 15px;
        font-size: 0.9rem;
        border-left: 3px solid ${themeConst('theme:colors.fg')};
        p {
            font-style: italic;
            margin: 0;
        }
    }

    code {
        font: ${themeConst('theme:fonts.mono')};
        padding: 0.2em 0.4em;
        font-size: 0.8em;
        white-space: nowrap;
        border-radius: 0.5em;
        background-color: ${themeConst('theme:colors.area')};
    }

    pre {
        font: ${themeConst('theme:fonts.mono')};
        padding: 1em;
        overflow: auto;
        font-size: 1.2em;
        border-radius: 0.5em;
        background-color: ${themeConst('theme:colors.area')};
        code {
            padding: 0;
            white-space: pre;
        }
    }

    a {
        text-decoration: underline;
    }
`;
