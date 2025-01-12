import {createContext, useState} from 'react';


export const AuthContext = createContext();

export default function AuthContextProvider(props) {
    const [loggedIn, setLoggedIn] = useState(false);

    const toggleAuth = () => setLoggedIn(!loggedIn);

    return (
        <AuthContext.Provider value={{loggedIn, toggleAuth}}>
            {props.children}
        </AuthContext.Provider>
    )
}