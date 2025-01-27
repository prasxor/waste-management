// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/Auth/Login';
// import Signup from './components/Auth/Signup';
// import ReportForm from './components/WasteReport/ReportForm';
// import AdminDashboard from './components/Admin/AdminDashboard';

// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Login />} />
//                 <Route path="/signup" element={<Signup />} />
//                 <Route path="/report" element={<ReportForm />} />
//                 <Route path="/admin" element={<AdminDashboard />} />
//             </Routes>
//         </Router>
//     );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import AdminDashboard from "./components/Admin/AdminDashboard";
import ReportForm from "./components/WasteReport/ReportForm";
import ReportList from "./components/WasteReport/ReportList";

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/* Redirect root "/" to "/login" */}
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/report" element={<ReportForm />} />
                    <Route path="/reports" element={<ReportList />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
