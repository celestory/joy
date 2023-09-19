import {useContext, createContext} from 'react';

import {darkTheme} from './themes';
import type {Theme} from '../utils/types/theme';

export const themeContext = createContext<Theme>(darkTheme);

export const useTheme = () => useContext(themeContext);
