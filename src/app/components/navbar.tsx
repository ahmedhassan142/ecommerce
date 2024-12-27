"use client" 
import Link from 'next/link';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Logo href="/">E-Shop</Logo>
      <Menu>
        <Link href="/">Home</Link>
        <Link href="/cart">Cart</Link>
      </Menu>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
`;

const Menu = styled.div`
  a {
    color: white;
    margin-left: 1rem;
    text-decoration: none;
  }
`;
