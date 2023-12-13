import { useState } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiSearchLine } from "react-icons/ri";
import MobileNavItems from "./mobile-navitems";

export default function MobileNavbar() {
  const navigate = useNavigate();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <Wrapper>
        <img
          src="https://cdn4.iconfinder.com/data/icons/landmark-71/126/space-needle-tower-seattle-downtown-1024.png" height="50" width="100"
          alt="App Logo"
          className="pointer"
          onClick={() => navigate("/")}
        />
        <IconsWrapper>
          <Icon as={RiSearchLine} />
          <Icon as={GiHamburgerMenu} onClick={() => setIsOpenMenu(true)} />
        </IconsWrapper>
      </Wrapper>
      {isOpenMenu &&
        createPortal(<MobileNavItems onClose={() => setIsOpenMenu(false)} />, document.body)}
    </>
  );
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const Icon = styled.svg`
  transform: scale(1.5);
  color: #2f71e5;
  cursor: pointer;
`;
