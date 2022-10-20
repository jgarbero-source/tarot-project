import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login({ setUser }) {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const { username, password } = formData

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({...formData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }).then((r) => {
            if (r.ok) {
              r.json().then((user) => 
              {
                setUser(user)
                navigate('/') //change to user
              })
            } else {
              r.json().then(json => setErrors(Object.entries(json.errors)))
            }
        });
        setFormData({
            username: '',
            password: ''
        })
    }

    return(
        <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Username"
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChange}
                />
                <input 
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
                <button>Login</button>
            </form>
            {errors?errors.map(e => <div key={e[0]}>{e[1]}</div>):null}
        </>
    )
}

export default Login;