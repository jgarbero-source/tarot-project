import React from "react";
import { NavLink } from "react-router-dom";

function UserNavBar() {

    return(
        <nav>
            <NavLink to="/user">
                <button>Your Profile</button>
            </NavLink>
            <NavLink to="/spreads">
                <button>Do a Spread</button>
            </NavLink>
            <NavLink to="/user/spreads">
                <button>Your Spreads</button>
            </NavLink>
        </nav>
    )
}

export default UserNavBar;