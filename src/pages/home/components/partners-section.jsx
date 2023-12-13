import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import WidthWrapper from "../../../components/width-wrapper";
import axios from 'axios'; 

export default function PartnersSection() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/partners");
        setPartners(response.data);
      } catch (error) {
        console.error("Error fetching partners data:", error);
      }
    };

    fetchPartners();
  }, []);

  return (
    <WidthWrapper>
      <Wrapper>
        <SponsorsHeader>Our Sponsors:</SponsorsHeader> 
        <ImagesContainer>
          {partners.map((partner) => (
            <ImageWrapper key={partner._id}>
              <img src={partner.imageUrl} alt="Partners" />
            </ImageWrapper>
          ))}
        </ImagesContainer>
      </Wrapper>
    </WidthWrapper>
  );
}

const SponsorsHeader = styled.h2`
  text-align: left;
  font-size: 24px;
  margin-top: 10px;
  margin-bottom: 30px; /* Increase the bottom margin for more space */
`;

const Wrapper = styled.section`
  padding: 20px 0;
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 40px; /* Increase the gap as needed for more space */
`;

const ImageWrapper = styled.div`
  min-width: calc(100% / 4 - 25px);
  text-align: center;
  
  img {
    height: 50px;
    width: auto;
  }
`;
