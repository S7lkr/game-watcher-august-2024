import { NavLink, Link } from "react-router-dom";

export default function NavBar() {
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
                                <li><NavLink to="/" style={({isActive}) => isActive ? {fontWeight: 'bold'} : {}}>Home</NavLink></li>
                                <li><NavLink to="/game-list" style={({isActive}) => isActive ? {fontWeight: 'bold'} : {}}>All Games</NavLink></li>
                                <li><NavLink to="/about" style={({isActive}) => isActive ? {fontWeight: 'bold'} : {}}>About</NavLink></li>
                                <li>|</li>
                                <li><NavLink to="/login" style={({isActive}) => isActive ? {fontWeight: 'bold'} : {}}>Log in</NavLink></li>
                                <li><NavLink to="/register" style={({isActive}) => isActive ? {fontWeight: 'bold'} : {}}>Sign Up</NavLink></li>
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