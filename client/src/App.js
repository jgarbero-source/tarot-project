import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Login.js";
import Signup from './Signup';
import Home from './Home';
import Header from './Header';
import NavBar from './NavBar';
import Cards from './Cards';
import UserNavBar from './UserNavBar';
import User from './User';
import Spreads from './Spreads';
import UserSpreads from './UserSpreads';


function App() {
  const [user, setUser] = useState(null)
  const [cards, setCards] = useState([])
  const [trueCards, setTrueCards] = useState([])
  const navigate = useNavigate();

  function doLogout() {
    navigate("/")
    setUser(null)
  }

  function deleteUser() {
    setUser(null)
    navigate("/")
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

  useEffect(() => {
    fetch("/cards")
        .then(r=>r.json())
        .then(r=> {
            setCards(r)
            setTrueCards(r)
    })
  }, [])

  return (
    <div className="App">
      <Header user={user} doLogout={doLogout}/>
      <NavBar />
      {user? <UserNavBar user={user}/> : null}
      <Routes>
        <Route path ="/" element={<Home user={user}/>}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login setUser={setUser} />}/>
        <Route path="/cards" element={<Cards cards={cards} setCards={setCards} trueCards={trueCards} />}/>
        <Route path="/user" element={<User user={user} deleteUser={deleteUser}/>}/>
        <Route path="/spreads" element={<Spreads user={user} trueCards={trueCards}/>}/>
        <Route path="/user/spreads" element={<UserSpreads/> }/>
      </Routes>
    </div>
  );
}

export default App;
