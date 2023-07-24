import React from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import './joy.css';
import {App} from './examples/App';

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
