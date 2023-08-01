import styled from '@emotion/styled';
import {Flex, ThemeProvider, useInputState, useLocationState} from '../joy';

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

import {dark, light} from './themes';

const examples = {
    hero: <Hero />,
    tags: <Tags />,
    login: <Login />,
    editor: <Editor />,
    article: <Article />,
    pricing: <Pricing />,
    gallery: <Gallery />,
    landing: <Landing />,
    bentoGrid: <BentoGrid />,
    testimonials: <Testimonials />,
};
type Example = keyof typeof examples;

const themes = {light, dark};
type ThemeName = keyof typeof themes;

const Bottom = styled(Flex)`
    position: fixed;
    right: 1rem;
    bottom: 1rem;
`;

export const App = () => {
    const [themeName, setThemeName] = useInputState<ThemeName>('dark');
    const [example, changeExample] = useLocationState<Example>('landing');
    return (
        <ThemeProvider theme={themes[themeName]}>
            {examples[example]}
            <Bottom gap="1rem">
                <select value={themeName} onChange={setThemeName}>
                    <option value="dark">🌙 Dark</option>
                    <option value="light">☀️ Light</option>
                </select>
                <select value={example} onChange={changeExample}>
                    {Object.keys(examples).map(example => (
                        <option key={example}>{example}</option>
                    ))}
                </select>
            </Bottom>
        </ThemeProvider>
    );
};
