import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function User({ user, deleteUser }) {

    let userInfo;
    if (user) {
        const { first_name, last_name, username, email } = user
        userInfo = 
            <div>
                <h2>Hello, {first_name}!</h2>
                <h3>Your profile info:</h3>
                    <ul>
                        <p>Name: {first_name} {last_name}</p>
                        <p>Username: {username}</p>
                        <p>Email: {email}</p>
                    </ul>
            </div>
    } else {
        userInfo = <h1>No user is logged in.</h1>
    }

    return(
        <>
            {userInfo}
        </>
    )
}

export default User;