import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function NavBar() {
    const activeLink = ({ isActive }) => isActive ? { fontWeight: 'bold' } : {};        // active link css
    const { username, isAuthenticated } = useContext(AuthContext);
    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">

                            <Link to="/" className="logo">
                                <img src="/images/logo3a.png" alt="logo" style={{ width: '158px' }} />
                            </Link>

                            <ul className="nav">
                                <li><NavLink to="/" style={activeLink}>Home</NavLink></li>
                                <li><NavLink to="/about" style={activeLink}>About</NavLink></li>
                                <li><NavLink to="/game-list" style={activeLink}>All Games</NavLink></li>
                                {isAuthenticated
                                    ?
                                    (
                                        <>
                                            <li><NavLink to="/create-game" style={activeLink}>Create Game</NavLink></li>
                                            <li>|</li>
                                            <li className="profile"><i className="fa-regular fa-user"><span>{username}</span></i></li>
                                            <li><NavLink to="/logout" style={activeLink}>LogOut</NavLink></li>
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <li>|</li>
                                            <li><NavLink to="/login" style={activeLink}>Login</NavLink></li>
                                            <li><NavLink to="/register" style={activeLink}>Register</NavLink></li>
                                        </>
                                    )
                                }

                            </ul>
                            <a className='menu-trigger'>
                                <span>Menu</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}