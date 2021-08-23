import React, { Component } from 'react'
import { NavbarBrand, Navbar, Container, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap'

class TopBar extends Component {
    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this);
    
        this.state = {
             isOpen: false
        }
    }
     toggle(){
         this.setState({
             isOpen: !this.state.isOpen
         });
     }
    render() {
        return (
            <Navbar color = "primary" dark expand = "md">
                <Container>
                    <NavbarBrand href ="/"> <span>IKEOFFIAH PIUS</span></NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ma-auto" navbar>
                            <NavItem>
                                <NavLink href="/profile/"  style={{color:'white'}}>My Profile</NavLink>
                            </NavItem>
                        </Nav>

                    </Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default TopBar
