import {Landing} from './Landing';
import {ThemeProvider} from '../joy';

export const App = () => {
    return (
        <ThemeProvider
            theme={{
                font: 'Arial',
                //
                red: '#ff0000',
                green: '#00ff00',
                margin: '0',
                padding: '0',
                fontSize: '2rem',
                //
                subStuff: {
                    red: '#ff0000',
                    green: '#00ff00',
                },
            }}
        >
            <Landing />
        </ThemeProvider>
    );
};
