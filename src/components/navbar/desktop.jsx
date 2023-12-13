import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { useNavigate, NavLink as Link } from "react-router-dom";

import { COLORS } from "../../utils/constants";
import Button from "../button";

export default function DesktopNavbar() {
  const navigate = useNavigate();
  const handleNavigateToHomePage = () => navigate("/");

  return (
    <Nav>
      <LeftItem>
        <img
          src="https://cdn4.iconfinder.com/data/icons/landmark-71/126/space-needle-tower-seattle-downtown-1024.png" height="50" width="100"
          alt="App Logo"
          className="pointer"
          onClick={handleNavigateToHomePage}
        />
        <InputWrapper>
          <CiSearch />
          <Input placeholder="Find by name or service" />
        </InputWrapper>
      </LeftItem>
      <RightItem>
        <ListItem>
          <NavLink to="/about">About</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/faq">FAQ</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </ListItem>
        <ListItem>
          <Button as={NavLink} to="/report-crisis">
            Report Crime
          </Button>
        </ListItem>
      </RightItem>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  min-height: 100px;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #fff;
  border-bottom: 1px solid #f4f4f4;

  @media screen and (max-width: 1065px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
`;

const LeftItem = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const InputWrapper = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 400px;
  background-color: #f9f9f9;
  height: 40px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  background-color: transparent;
  color: #333;

  &::placeholder {
    color: #999;
  }
`;

// Right Item
const RightItem = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const ListItem = styled.li`
  list-style: none;
`;

const NavLink = styled(Link)`
  color: ${COLORS.primary};
  text-decoration: none;
`;
