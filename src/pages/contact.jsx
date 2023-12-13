import styled from "styled-components";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <H2>Real Change is located in downtown Seattle in the heart of the historic Pioneer Square neighborhood.</H2>
        
        <H3Small>Current Business Hours:</H3Small>
        <Info>Monday: 8:30am-2pm</Info>
        <Info>Tuesday: 8:30am-2pm</Info>
        <Info>Wednesday: 8:30am-4pm</Info>
        <Info>Thursday: 8:30am-2pm</Info>
        <Info>Friday: 8:30am-4pm</Info>
        <P>Closed all other days.</P>
        
        <H3Small>Vendor Center Orientation Hours:</H3Small>
        <Info>Monday, Tuesday, & Friday 8:30am-11:30am (drop-in)</Info>
        
        <H3Small>Real Change is closed for the following Holidays in 2023:</H3Small>
        <P>New Year's Day (Observed) - Monday, January 2</P>
        <P>Martin Luther King Jr. Day - Monday, January 16</P>
        <P>Memorial Day - Monday, May 29</P>
        <P>Juneteenth - Monday, June 19</P>
        <P>Independence Day - Tuesday, July 4</P>
        <P>Labor Day - Monday, September 4</P>
        <P>Indigenous People's Day - Monday, October 9</P>
        <P>Thanksgiving - Thursday, November 23</P>
        <P>Native American Heritage Day - Friday, November 24</P>
        <P>Christmas Day - Monday, December 25</P>
        <P>New Year's Day - Monday, January 1, 2024</P>
        
        <P>Vendor Center: 96 S Main St., Seattle, WA 98104</P>
        <P>Mailing Address: 219 1st Ave S., Suite 220, Seattle, WA 98104</P>
        <P>Phone: (206) 441-3247</P>
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

const H2 = styled.h2`
  font-size: 28px;
  line-height: 1.3;
  font-weight: bold;
  margin-bottom: 20px;
`;

const H3Small = styled.h3`
  font-size: 20px; /* Smaller size for H3 */
  line-height: 1.3;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 5px;
`;

const Info = styled.p`
  font-size: 18px;
  line-height: 1.7;
  margin-top: 0;
  margin-bottom: 10px;
`;

const P = styled.p`
  max-width: 600px;
  margin-top: 0;
  line-height: 1.7;
  margin-bottom: 10px;
`;
