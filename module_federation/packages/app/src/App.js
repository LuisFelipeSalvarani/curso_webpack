import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

// CSS
import './app.css';

const App = () => {
    // MF
    const Home = React.lazy(() => import("HomeApp/HomeApp"));
    const Contact = React.lazy(() => import("ContactApp/ContactApp"));

    return (
        <Router>
            <div>
                <Navbar color="light" light expand="md">
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contact">Contact</Link>
                        </NavItem>
                    </Nav>
                </Navbar>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Suspense>
            </div>
        </Router>
    );
}

export default App;
