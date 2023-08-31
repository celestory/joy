import styled from '@emotion/styled';
import {
    Flex,
    Select,
    ThemeProvider,
    useInputState,
    useLocationState,
    //
    darkTheme,
    lightTheme,
} from '../joy';

// examples
import {Hero} from './Hero';
import {Tags} from './Tags';
import {Login} from './Login';
import {Editor} from './Editor';
import {Article} from './Article';
import {Landing} from './Landing';
import {Pricing} from './Pricing';
import {Gallery} from './Gallery';
import {BentoGrid} from './BentoGrid';
import {Testimonials} from './Testimonials';

import {Progress} from './Progress';
import {MegaForms} from './MegaForms';

const examples = {
    hero: <Hero />,
    tags: <Tags />,
    login: <Login />,
    editor: <Editor />,
    article: <Article />,
    pricing: <Pricing />,
    progress: <Progress />,
    gallery: <Gallery />,
    landing: <Landing />,
    bentoGrid: <BentoGrid />,
    megaforms: <MegaForms />,
    testimonials: <Testimonials />,
};
type Example = keyof typeof examples;

const themes = {darkTheme, lightTheme};
type ThemeName = keyof typeof themes;

const Bottom = styled(Flex)`
    position: fixed;
    right: 1rem;
    bottom: 1rem;
`;

export const App = () => {
    const [example, changeExample] = useLocationState<Example>('landing');
    const [themeName, setThemeName] = useInputState<ThemeName>('darkTheme');

    return (
        <ThemeProvider theme={themes[themeName]}>
            {examples[example]}
            <Bottom gap="1rem">
                <Select size="0.8rem" value={themeName} onChange={setThemeName}>
                    <option value="darkTheme">🌙 Dark</option>
                    <option value="lightTheme">☀️ Light</option>
                </Select>
                <Select size="0.8rem" value={example} onChange={changeExample}>
                    {Object.keys(examples).map(example => (
                        <option key={example}>{example}</option>
                    ))}
                </Select>
            </Bottom>
        </ThemeProvider>
    );
};
