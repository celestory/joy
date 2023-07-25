import {ThemeProvider} from '../joy';
import {FancyGrid} from './FancyGrid';

export const App = () => {
    return (
        <ThemeProvider
            theme={{
                mainFont: 'sans-serif',
                titleFont: 'sans-serif',
                textFont: 'serif',

                foreground: '#eeeeee',
                subForeground: '#cccccc',
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
            {/* <Login /> */}
            <FancyGrid />
        </ThemeProvider>
    );
};
