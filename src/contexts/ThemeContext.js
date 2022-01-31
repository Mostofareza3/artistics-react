import { createContext } from 'react';
import ThemeList from '../data/ThemeList';

const ThemeContext = createContext();
const lightTheme = ThemeList.light;
const darkTheme = ThemeList.dark;

const themeReducer = (state, action)=>{
    switch(action.type){
        case 'TOGGLE_THEME':
            return{
                theme: state.theme === darkTheme ? lightTheme
            }
    }
}

export default ThemeContext;
