import styled from "styled-components";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function ReportStreetCrisisPage() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Heading>Report a Crime</Heading>
        <Description>
          <ul>
            <li>Crime in progress: Call 911.</li>
            <li>Police non-emergency line: (206) 625-5011</li>
            <li>Please read the Seattle Police Department's <a href="https://www.seattle.gov/police/need-help/property-crimes/online-reporting">page</a> on how to report a crime.</li>
          </ul>
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

const Heading = styled.h1`
  font-size: 36px;
  line-height: 1.3;
  font-weight: bold;
`;

const Description = styled.div`
  max-width: 600px;
  margin-top: 30px;
  line-height: 1.7;
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
  }
  a {
    text-decoration: none;
    color: #0000EE; // Standard link color
    &:hover {
      text-decoration: underline;
    }
  }
`;
