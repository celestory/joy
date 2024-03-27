import styled from '@emotion/styled';
import {forwardRef, useEffect, useState} from 'react';
import type TextareaAutosize from 'react-textarea-autosize';
import type {InputHTMLAttributes} from 'react';
import type {TextareaAutosizeProps} from 'react-textarea-autosize';

import {inputCss} from './inputCss';
import type {BoxProps} from '../../Box/Box';
import type {OmitStrict} from '../../../utils/types/utils';
import type {CSSFontSize} from '../../../utils/types/theme';
import type {WithBreakpoint, MakeBreakpoints} from '../../../utils/types/break';

interface BaseProps extends OmitStrict<InputHTMLAttributes<HTMLTextAreaElement>, 'size'> {
    size?: WithBreakpoint<CSSFontSize>;
}

export type InputProps = OmitStrict<BoxProps, 'el'> & MakeBreakpoints<BaseProps>;

export const ResizableTextarea = forwardRef<HTMLTextAreaElement, TextareaAutosizeProps>(({style, className, ...props}, ref) => {
    const [Elem, setElem] = useState<typeof TextareaAutosize | null>(null);

    useEffect(() => {
        (async () => {
            const TextareaAutosize = (await import('react-textarea-autosize')).default;
            setElem(
                () =>
                    styled(TextareaAutosize)`
                        ${inputCss}
                        transition: none;
                    ` as any,
            );
        })();
    }, []);

    if (Elem === null) {
        return null;
    }

    return <Elem ref={ref} className={className} style={style} {...props} />;
});
