import React from 'react'
import {Link} from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        return(
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Abbott Doctor Registration</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                    <Link className="p-2 text-dark" to="/">Home</Link>
                    </NavItem>
                    <NavItem>
                    <Link className="p-2 text-dark" to="/login">Login</Link>
                    </NavItem>
                    <NavItem>
                    <Link className="p-2 text-dark" to="/signup">Sign Up</Link>
                    </NavItem>
                    <NavItem>
                    <Link className="p-2 text-dark" to="/profile">Profile</Link>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export {Navigation}