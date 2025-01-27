// import React, { useState } from 'react';
// import { useAuth } from '../../context/AuthContext';

// const Signup = () => {
//     const { signup } = useAuth();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await signup(email, password);
//             // Redirect or show success message
//         } catch (err) {
//             setError(err.message);
//         }
//     };

//     return (
//         <div className="auth-container">
//             <form onSubmit={handleSubmit}>
//                 <h2>Signup</h2>
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
//                 <button type="submit">Signup</button>
//             </form>
//         </div>
//     );
// };

// export default Signup;

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Account created successfully!");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <form onSubmit={handleSignup}>
            <h2>Signup</h2>
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
            <button type="submit">Signup</button>
        </form>
    );
};

export default Signup;
