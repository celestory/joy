import styled from '@emotion/styled';

import {ThemeProvider, useLocationState} from '../joy';

// examples
import {Hero} from './Hero';
import {Tags} from './Tags';
import {Login} from './Login';
import {Landing} from './Landing';
import {Pricing} from './Pricing';
import {Gallery} from './Gallery';
import {FancyGrid} from './FancyGrid';
import {Testimonials} from './Testimonials';
import {ScrollingSidebar} from './ScrollingSidebar';

const examples = {
    hero: <Hero />,
    tags: <Tags />,
    login: <Login />,
    pricing: <Pricing />,
    gallery: <Gallery />,
    landing: <Landing />,
    fancyGrid: <FancyGrid />,
    testimonials: <Testimonials />,
    scrollingSidebar: <ScrollingSidebar />,
};
type Example = keyof typeof examples;

const Select = styled.select`
    position: fixed;
    right: 1rem;
    bottom: 1rem;
`;

export const App = () => {
    const [example, changeExample] = useLocationState<Example>('landing');
    return (
        <ThemeProvider
            theme={{
                mainFont: 'sans-serif',
                titleFont: 'sans-serif',
                textFont: 'serif',

                foreground: '#eeeeee',
                subForeground: '#bbbbbb',
                disabledForeground: '#888888',
                background: '#161616',
                subBackground: '#252525',
                disabledBackground: '#555555',

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
            }}
        >
            {examples[example]}
            <Select value={example} onChange={changeExample}>
                {Object.keys(examples).map(example => (
                    <option key={example}>{example}</option>
                ))}
            </Select>
        </ThemeProvider>
    );
};
