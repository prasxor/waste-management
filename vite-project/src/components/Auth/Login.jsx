// import React, { useState } from 'react';
// import { useAuth } from '../../context/AuthContext';

// const Login = () => {
//     const { login } = useAuth();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await login(email, password);
//             // Redirect or show success message
//         } catch (err) {
//             setError(err.message);
//         }
//     };

//     return (
//         <div className="auth-container">
//             <form onSubmit={handleSubmit}>
//                 <h2>Login</h2>
//                 {error && <p className="error">{error}</p>}
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Logged in successfully!");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
