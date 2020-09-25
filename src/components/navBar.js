import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav} from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
      <Navbar variant="dark" expand="md" id="site-navbar">
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">Check-In App</Navbar.Brand>
        </Link>
        <Navbar aria-controls="basic-navbar-nav" />
        <Navbar id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/page-2" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
                DASHBOARD
              </Nav.Link>
            </Link>
            <Link to="/page-3" className="link-no-style">
              <Nav.Link as="span" eventKey="page-3">
                RESET
              </Nav.Link>
            </Link>
          </Nav>
          <Nav className="ml-auto">
          </Nav>
        </Navbar>
        
      </Navbar>
  )
}

export default CustomNavbar
