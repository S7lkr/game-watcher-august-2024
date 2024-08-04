export default function Header() {
    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">

                            <a href="#" className="logo">
                                <img src="/images/logo3a.png" alt="logo" style={{ width: '158px' }} />
                            </a>

                            <ul className="nav">
                                <li><a href="#" className="active">Home</a></li>
                                <li><a href="#">All Games</a></li>
                                <li><a href="#">About</a></li>
                                {/* <li><a href="contact.html">Contact Us</a></li> */}
                                <li>|</li>
                                <li><a href="#">Log in</a></li>
                                <li><a href="#">Sign Up</a></li>
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