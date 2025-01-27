// import React, { createContext, useContext, useState } from 'react';
// import { auth } from '../firebase/firebaseConfig';
// import { signInWithEmailAndPassword, createUser WithEmailAndPassword } from 'firebase/auth';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser ] = useState(null);

//     const login = async (email, password) => {
//         const userCredential = await signInWithEmailAndPassword(auth, email, password);
//         setUser (userCredential.user);
//     };

//     const signup = async (email, password) => {
//         const userCredential = await createUser WithEmailAndPassword(auth, email, password);
//         setUser (userCredential.user);
//     };

//     return (
//         <AuthContext.Provider value={{ user, login, signup }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);


import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ user, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
