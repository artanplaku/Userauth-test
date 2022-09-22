
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login"  element={<Login />} />
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/signup"  element={<SignUp />} />
    </Routes>
  );
}

export default App;
