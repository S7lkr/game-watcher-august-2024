import { NavLink, Link } from "react-router-dom";

export default function NavBar() {
    const active = ({isActive}) => isActive ? {fontWeight: 'bold'} : {};        // active link css
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
                                <li><NavLink to="/" style={active}>Home</NavLink></li>
                                <li><NavLink to="/game-list" style={active}>All Games</NavLink></li>
                                <li><NavLink to="/about" style={active}>About</NavLink></li>
                                <li>|</li>
                                <li><NavLink to="/login" style={active}>Log in</NavLink></li>
                                <li><NavLink to="/register" style={active}>Sign Up</NavLink></li>
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