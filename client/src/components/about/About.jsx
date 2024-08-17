import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function About() {
    // const [url, setUrl] = useState(document.URL);
    // const navigate = useNavigate();
    // useEffect(() => {
    //     navigate('contact-us');
    // }, []);
    
    return (
        <div id="about">
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
                    <Nav.Link as={Link} to="/about/services">Our Services</Nav.Link>
                </Nav.Item>
            </Nav>
            {/* {url === "http://localhost:5173/about"
                ? <div style={{ backgroundColor: "green", maxWidth: "100vh", maxHeight: "100vh" }}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cumque delectus beatae fuga assumenda aspernatur culpa ullam perspiciatis, quae, earum consequatur laboriosam rem impedit facere recusandae, necessitatibus laborum velit omnis.</p></div>
                : null
            } */}
            <Outlet />
        </div>
    );
}

export default About;