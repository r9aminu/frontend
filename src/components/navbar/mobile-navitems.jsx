import { NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { IoClose } from "react-icons/io5";

export default function MobileNavItems({ onClose }) {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <NavItem>
          <Icon as={IoClose} onClick={onClose} />
        </NavItem>
        <NavItem>
          <Link to="/about">About</Link>
        </NavItem>
        <NavItem>
          <Link to="/faq">FAQ</Link>
        </NavItem>
        <NavItem>
          <Link to="/contact-us">Contact Us</Link>
        </NavItem>
        <NavItem>
          <Link to="/report-crisis">Report Crisis</Link>
        </NavItem>
      </Wrapper>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
    html, body, #root {
        height: 100%;
    }

    #root {
        display: none;
    }
`;

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  isolation: isolate;
  position: relative;
  z-index: 1;
`;

const NavItem = styled.li`
  list-style: none;
  padding: 10px 20px;
  border-bottom: 1px solid #f4f4f4;
  color: white;
  color: #2f71e5;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

