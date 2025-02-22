import { createContext, useEffect, useState, } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const login = async (email, password) => {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer token_jwt`,
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        const data = await response.json();
        alert(data?.error || "Authentication successful!");
        localStorage.setItem("token", data.token);
        setToken(data.token);
        setUser(data.user);

    }

    const register = async (email, password, confirmPassword) => {
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer token_jwt`,
            },
            body: JSON.stringify({ email, password, confirmPassword }),

        });

        const data = await response.json();
        alert(data?.error || "Registration successful!");
        localStorage.setItem("token", data.token);

        setToken(token);
        setUser(data.user);
    }

    const getProfile = async () => {
        if (!token) {
            return;
        }
        setLoading(true);

        try {
            const response = await fetch("http://localhost:5000/api/auth/me", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Unable to fetch profile');
            }

            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.error('Error al obtener el perfil:', error);
        } finally {
            setLoading(false);
        }
    };


    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
        navigate('/login')
    }

    useEffect(() => {
        if (token) {
          getProfile();
        }
    }, [token]);

    return (
        <UserContext.Provider value={{ user, token, login, logout, getProfile }}>
            {children}
        </UserContext.Provider>
    );
};
