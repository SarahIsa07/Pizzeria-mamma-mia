import { createContext, useState, } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [token, setToken] = useState(true);

    const login = () => {
        alert('¡Hola, que alegría verte de nuevo!')
        setToken(true);
    }

    const logout = () => {
        setToken(false);
    }

    return (
        <UserContext.Provider value={{ token, logout, login }}>
            {children}
        </UserContext.Provider>
    );
};
