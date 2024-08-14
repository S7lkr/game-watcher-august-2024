import Nav from 'react-bootstrap/Nav';
import { Link, Outlet } from 'react-router-dom';

function About() {
    return (
        <div>
            <Nav
                id="about-nav"
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link as={Link} to="/about/contact-us">Contact Us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/about/team">Our Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/about/technology">Our Technology</Nav.Link>
                </Nav.Item>
            </Nav>
            <Outlet />
        </div>

    );
}

export default About;