import styled from "styled-components";
import WidthWrapper from "../../../components/width-wrapper";
import ServiceItem from "./service-item";
import useFetchServices from "../hooks/useFetchServices";

export default function ServicesSection() {
  const { isLoading, error, data: serviceRes } = useFetchServices();

  if (error || !serviceRes) return <></>;

  return (
    <Wrapper>
      <WidthWrapper>
        <Heading>Find Essential Services in Seattle</Heading>
        <ServicesWrapper>
          {serviceRes.data.services.map((service) => (
            <ServiceItem key={service.name} {...service} />
          ))}
        </ServicesWrapper>
      </WidthWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 100px;
  color: #202020;
`;

const Heading = styled.p`
  font-weight: 600;
  font-size: 4.2rem;
`;

const ServicesWrapper = styled.section`
  margin-top: 48px;
  gap: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(350px, 100%), 1fr));
`;
