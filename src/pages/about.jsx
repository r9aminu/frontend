import styled from "styled-components";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Heading>
          About the <br />
          Emerald City Resource Guide
        </Heading>
        <Description>
        The Emerald City Resource Guide is an online directory of human services in Seattle. Our goal is to help anyone with access to a smartphone, tablet, or computer find the services they need. The guide focus is on homelessness and housing services, but also covers a variety of other services, from education and legal aid to senior services and re-entry programs.
        </Description>
      </Wrapper>
      <Footer />
    </>
  );
}

const Wrapper = styled.div`
  max-width: 1000px;
  padding: 100px 25px;
  margin: 0 auto;
`;

const Heading = styled.p`
  font-size: 36px;
  line-height: 1.3;
  font-weight: bold;
`;

const Description = styled.p`
  max-width: 600px;
  margin-top: 30px;
  line-height: 1.7;
`;
