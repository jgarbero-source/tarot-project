import { useNavigate, Link } from "react-router-dom";

function Header({ user, doLogout }) {

    const navigate = useNavigate();

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => doLogout())
    }

    console.log(user)

    return(
        <>
            <h1>Tarot</h1>
            { user ? null : 
            <Link to="signup">
                <button>Signup</button>
            </Link>}
            { user ? (
                <div>
                    <h2>Welcome, {user.first_name} {user.last_name}!</h2>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <Link to="/login">
                    <button>Login</button>
                </Link>
            )}
        </>
    )
}

export default Header;