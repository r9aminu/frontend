import styled from "styled-components";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Heading>
          FAQ
        </Heading>
        <Description>
          <h1>How do I apply for benefits?</h1>
          <p>You may complete an application online for most DSHS benefits here:
            <a href="https://www.washingtonconnection.org/home/" target="_blank" rel="noopener noreferrer"> Apply for Services</a>.
            For your convenience, you have the option to <a href="https://www.dshs.wa.gov/esa/esa-find-office" target="_blank" rel="noopener noreferrer">visit your local community services office</a> to access in-person services,
            or call 877-501-2233 to apply for benefits by phone. You can view more information at
            <a href="https://www.dshs.wa.gov/esa/community-services-offices/how-apply-services" target="_blank" rel="noopener noreferrer"> How to Apply for Services</a>
          </p>
          <h1>Who do I call for help with my EBT card??</h1>
          <p>
            To check your balance, reset your PIN, or report a lost/stolen EBT card, call the EBT Vendor at 1-888-328-9271.
          </p>
          <h1>How do I access medical services if I am pregnant?</h1>
          <p>If you are already receiving benefits, you need to notify us of this change by calling the Washington Healthplanfinder Customer Support Center 1-855-923-4633. If you are in need of medical coverage, you can
            <a href="https://www.wahealthplanfinder.org/" target="_blank" rel="noopener noreferrer"> Apply for Services</a> online, by phone at 1-855-923-4633, or by submitting an <a href="https://www.hca.wa.gov/free-or-low-cost-health-care/forms-and-publications?combine=18-001P&field_free_topic_tid=All&field_free_document_type_value_1=All&sort=filename%20ASC" target="_blank" rel="noopener noreferrer"> Application for health care coverage. </a> 
            If you need assistance applying online, visit
            <a href="https://www.wahealthplanfinder.org/HBEWeb/Annon_DisplayBrokerNavigatorSearch.action?brokerNavigator=NAV" target="_blank" rel="noopener noreferrer">  Health Benefit Exchange Navigator</a> to find one near you.
          </p>
          
          
          <h1>What medical programs are available to me and my family?</h1>
          <p>Look up all the medical programs available to you and your family <span>here: </span><a href="https://www.hca.wa.gov/free-or-low-cost-health-care/i-need-medical-dental-or-vision-care/eligibility-overview" target="_blank" rel="noopener noreferrer"> Eligibility Overview</a>.</p>

          
          <h1>What do I do if I need an emergency shelter?</h1>
          <p>Call 211 immediately for information on where to go or visit <a href="https://kcrha.org/resources/for-people-experiencing-homelessness/" target="_blank" rel="noopener noreferrer">King County Regional Homeless Authority (KCRHA)</a> for resources.</p>

          
          <h1>How can I apply for affordable housing?</h1>
          <p>Call 206.615.3300 or visit <a href="https://www.seattlehousing.org/housing" target="_blank" rel="noopener noreferrer">Seattle Housing Authority</a> for more information.</p>

        
          <h1>Where can I get free or low cost legal representation?</h1>
          <p>Visit <a href="https://www.spl.org/programs-and-services/civics-and-social-services/legal-resources" target="_blank" rel="noopener noreferrer">legal resources</a> or call 206-477-9727 to determine eligibility.</p>

          
          <h1>How do I find a job?</h1>
          <p>Visit <a href="https://www.worksourceskc.org" target="_blank" rel="noopener noreferrer">WorkSource</a> for all employment-related resources or call 206-436-8600 WA Relay Service: 711 for help.</p>

          
          <h1>Am I eligible for Free or Discounted phone, computer, or Internet service?</h1>
          <p>Visit <a href="https://www.seattle.gov/tech/internet-and-devices/free-and-discounted-internet" target="_blank" rel="noopener noreferrer">see eligibility</a>. You can also contact the Cable Office at (206) 684-8498 or by email at digitalequity@seattle.gov.</p>

         
          <h1>What resources are available the LGBTQ+ community?</h1>
          <p>Contact the Seattle LGBTQ Commission at (206) 684-4500 or visit their website at <a href="https://www.seattle.gov/lgbtq/contact" target="_blank" rel="noopener noreferrer">https://www.seattle.gov/lgbtq/contact</a></p>

          
          <h1>Who do I contact if I'm experiencing domestic violence?</h1>
          <p>Call 800-799-7233 immediately. Also see <a href="https://kingcounty.gov/en/dept/council/governance-leadership/county-council/councilmembers-districts/pete-von-reichbauer/links-to-resources/domestic-violence" target="_blank" rel="noopener noreferrer">these domestic violence resources</a>.</p>

        
          <h1>Where can I get help on immigration?</h1>
          <p>Call (206) 727-8515 or email oira@seattle.gov. You can also visit <a href="https://www.seattle.gov/iandraffairs/resources#:~:text=For%20all%20inquiries%2C%20we%20recommend,email%20oira%40seattle.gov" target="_blank" rel="noopener noreferrer">Office of Immigrant and Refugee Affairs</a>.</p>
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

const Description = styled.div`
  max-width: 600px;
  margin-top: 30px;
  line-height: 1.7;

  p {
    margin-bottom: 20px;
    font-size: 16px;
    word-spacing: 0.1em;
  }

  h1 {
    font-size: 24px;
    letter-spacing: 0.05em;
  }

  /* Add the following CSS rule to remove underlines from links */
  a {
    text-decoration: none;
  }

  /* Add CSS rule for the span element */
  span {
    margin-right: 5px; /* Add space between 'here:' and the link */
  }
`;