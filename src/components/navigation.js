import React from 'react'
import { Nav, NavItem } from 'reactstrap';
import {Link} from 'react-router-dom'

class Navigation extends React.Component {
    render() {
        return(
            <Nav>
                <NavItem>
                <Link to="/">Home</Link>
                </NavItem>
                <NavItem>
                <Link to="/login">Login</Link>
                </NavItem>
                <NavItem>
                <Link to="/signup">Sign Up</Link>
                </NavItem>
                <NavItem>
                <Link to="/profile">Profile</Link>
                </NavItem>
            </Nav>
        )
    }
}

export {Navigation}