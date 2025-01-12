import {useContext} from "react";
import {AuthContext} from "../contexts/AuthContext";
import {ThemeContext} from "../contexts/ThemeContext";


export default function Navbar() {
    const {loggedIn, toggleAuth} = useContext(AuthContext);
    const {isLightTheme, toggleTheme} = useContext(ThemeContext);

    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li onClick={() => toggleAuth()}>{loggedIn ? 'Log in' : 'Log out'}</li>
                <li onClick={() => toggleTheme()}>{isLightTheme ? 'Light' : 'Dark'}</li>
            </ul>
        </nav>
    )
}