import {createContext, useState} from 'react';

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {

    const [isLightTheme, setIsLightTheme] = useState(true);
    const light = {syntax: '#9ed370', ui: '#333', bg: '#eee'};
    const dark = {syntax: '#ddd', ui: '#333', bg: '#555'};

    const toggleTheme = () => setIsLightTheme(!isLightTheme);

    return (
        <ThemeContext.Provider value={{isLightTheme, dark, light, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}