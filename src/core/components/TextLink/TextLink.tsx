import type {AnchorHTMLAttributes, PropsWithChildren} from 'react';

import {textLinkCss} from './textLinkCss';
import {createStyledWithBreakpoints} from '../../utils/breakpoints';
import type {OmitStrict} from '../../utils/types/utils';
import type {TextSpanProps} from '../TextSpan/TextSpan';

export type TextLinkProps = OmitStrict<TextSpanProps, 'el'> & AnchorHTMLAttributes<HTMLAnchorElement>;

const StyledLink = createStyledWithBreakpoints(textLinkCss, 'a');

export const TextLink = ({style, className, children, ...props}: PropsWithChildren<TextLinkProps>) => {
    return (
        <StyledLink {...props} style={style!} className={className}>
            {children}
        </StyledLink>
    );
};
