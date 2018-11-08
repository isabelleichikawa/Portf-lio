import React, { Component } from 'react';
import './header.css';
import { Navbar, NavItem, Nav} from 'react-bootstrap'

class Header extends Component {
    render() {
        return (
            <div id = "navbar">

            
            <Navbar fixedTop collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">IIY</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#section_header">
                            PERFIL
                        </NavItem>
                        <NavItem eventKey={2} href="#section_skills">
                            SKILLS
                        </NavItem>
                        <NavItem eventKey={3} href="#section_blog">
                            BLOG
                        </NavItem>
                        <NavItem eventKey={4} href="#section_portf">
                            PORTFÓLIO
                        </NavItem>
                        <NavItem eventKey={5} href="#section_info">
                            INFO
                        </NavItem>
                        <NavItem eventKey={6} href="#section_contact">
                            CONTATO
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        );
    }
}

export default Header;