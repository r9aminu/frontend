import styled from "styled-components";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Heading>
          Terms of Service
        </Heading>
        <Description>
          ??
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
