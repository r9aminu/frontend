import styled from "styled-components";
import WidthWrapper from "./width-wrapper";
import { COLORS } from "../utils/constants";
import { NavLink } from "react-router-dom"; 
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa'; 

export default function Footer() {
  return (
    <Wrapper>
      <WidthWrapper>
        <InnerWrapper>
          <LogoWrapper>
            <img
              src="https://cdn4.iconfinder.com/data/icons/landmark-71/126/space-needle-tower-seattle-downtown-1024.png" height="50" width="100"
              alt="Logo"
            />
          </LogoWrapper>

          <VStack>
            <VStackHeading>Connect</VStackHeading>
            <ListItem>
              <Link to="/email-form"><FaEnvelope /> Email</Link> 
            </ListItem>
            <ListItem>
              <Link to="https://www.facebook.com/realchangenews"><FaFacebook /> Facebook</Link> 
            </ListItem>
            <ListItem>
              <Link to="https://twitter.com"><FaTwitter /> Twitter</Link> 
            </ListItem>
            <ListItem>
              <Link to="https://instagram.com"><FaInstagram /> Instagram</Link> 
            </ListItem>
          </VStack>
          <VStack>
            <VStackHeading>Legal</VStackHeading>
            <ListItem>
              <Link to="/terms">Terms of Service</Link>
            </ListItem>
            <ListItem>
              <Link to="/privacy">Privacy Policy</Link>
            </ListItem>
          </VStack>
        </InnerWrapper>

        <Copyright>
          Created and maintained by ©2023 
        </Copyright>
      </WidthWrapper>
    </Wrapper>
  );
}

const mediaQueryWidth = "600px";

const Wrapper = styled.footer`
  background-color: #e0e0e0;
  color: #212121;
  font-size: 1.3rem;
  padding: 50px 0;
`;

const InnerWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  flex: 2;

  @media screen and (max-width: ${mediaQueryWidth}) {
    text-align: center;
  }
`;

const VStack = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: ${mediaQueryWidth}) {
    display: none;
  }
`;

const ListItem = styled.li`
  list-style: none;
`;

const VStackHeading = styled(ListItem)`
  text-transform: uppercase;
  font-weight: 900;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: ${COLORS.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 80px;
  text-align: center;
  font-size: 1.4rem;

  @media screen and (max-width: ${mediaQueryWidth}) {
    margin-top: 30px;
  }
`;
