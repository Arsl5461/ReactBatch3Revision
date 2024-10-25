import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


function Navbarr() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src='https://zerolifestyle.co/cdn/shop/files/logo.png?v=1676901766&width=500' height={"50px"} width={"150px"}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link><Link to="/" className='link'>Home</Link></Nav.Link>
            <Nav.Link><Link to="/smartwatches" className='link'>Smartwatches</Link></Nav.Link>
            <Nav.Link><Link to="/earbud" className='link'>Earbud</Link></Nav.Link>
            <Nav.Link><Link to="/support" className='link'>Support</Link></Nav.Link>
          </Nav>
          <div className="icons">
          <FaUser className='icon' />
          <FaShoppingCart className='icon' />
          <FaSearch className='icon' />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;