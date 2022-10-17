import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, NavLink, BrowserRouter } from "react-router-dom";
import Login from "./Login.js";
import Signup from './Signup';
import Home from './Home';
import Header from './Header';


function App() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate();

  function handleLogin() {
    setUser(user)
  }

  function doLogout() {
    navigate("/")
    setUser(null)
  }

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((client) => {
          setUser(client);
        });
      } else {
        console.log("We're not rendering nothing pal");
      }
    });
  }, []);

  return (
    <div className="App">
      <Header user={user} doLogout={doLogout}/>
      <Routes>
        <Route path ="/" element={<Home user={user}/>}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login handleLogin={handleLogin} />}/>
      </Routes>
    </div>
  );
}

export default App;
