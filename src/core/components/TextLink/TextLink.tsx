import type {LinkHTMLAttributes, PropsWithChildren} from 'react';

import {textLinkCss} from './textLinkCss';
import {createStyledWithBreakpoints} from '../../utils/breakpoints';
import type {TextSpanProps} from '../TextSpan/TextSpan';
import type {OmitStrict} from '../../utils/types/utils';

export type TextLinkProps = OmitStrict<TextSpanProps, 'el'> & LinkHTMLAttributes<HTMLAnchorElement>;

const StyledLink = createStyledWithBreakpoints(textLinkCss, 'a');

export const TextLink = ({style, className, children, ...props}: PropsWithChildren<TextLinkProps>) => {
    return (
        <StyledLink style={style!} className={className} {...props}>
            {children}
        </StyledLink>
    );
};
