import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
//import React from 'react';
const Header = ()=> {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
          <Nav className="me-auto"  >
            <Link to="/" className='navbar-brand' >HOME</Link>
            <Link to="/joinForm" className='nav-link' >회원가입</Link>
            <Link to="/loginForm" className='nav-link'>로그인</Link>
            <Link to="/saveForm" className='nav-link'>글쓰기</Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;