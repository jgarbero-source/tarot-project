import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'

function Signup() {

    const [errors, setErrors] = useState([])
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        email: ''
    })
    const { firstName, lastName, username, password, email } = formData

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({...formData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()

        fetch('/users',{
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(formData)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    console.log(user)
                    navigate(`/login`)
                })
            } else {
                res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
        setFormData({
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            email: ''
        })
    }

    return(
        <>
            <h2>Signup!</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="First name"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={handleChange}
                />
                <input 
                    placeholder="Last name"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={handleChange}
                />
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
                <input 
                    placeholder="Email"
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
                <button>Submit!</button>
            </form>
        {errors? errors.map(error => <div> {error[0]} {error[1]} </div>) : null }
        </>
    )
}

export default Signup;