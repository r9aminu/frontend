import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../utils/constants";
import { FaPhone, FaExternalLinkAlt } from 'react-icons/fa'; 

export default function ResourceItem({ resource }) {
  return (
    <Item>
      <Heading>
        {resource.title}
      </Heading>

      <Address>{resource.address}</Address>
      <Hours>{resource.hours}</Hours>

      {resource.description && (
        <Description dangerouslySetInnerHTML={{ __html: resource.description }} />
      )}

      <IconList>
        {resource.phoneNo && (
          <IconItem>
            <FaPhone size={15} color="black" /> 
            <p>{resource.phoneNo}</p>
          </IconItem>
        )}
        {resource.websiteURL && (
          <IconItem>
            <a href={resource.websiteURL} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <FaExternalLinkAlt size={15} color="black" style={{ marginRight: '5px' }} /> {/* Even smaller website icon */}
              Go to website
            </a>
          </IconItem>
        )}
      </IconList>
    </Item>
  );
}


const Item = styled.div`
  color: #30383a;
  border-bottom: 1px solid #f4f4f4;
  padding: 0 30px;
`;

const Heading = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${COLORS.primary};

  & a {
    color: inherit;
    text-decoration: none;
  }
`;

const Address = styled.p`
  font-size: 1.6rem;
  margin-top: 12px;
`;

const Hours = styled.p`
  font-size: 1.6rem;
  margin-top: 12px;
`;

const IconList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const IconItem = styled.div`
  display: flex;
  gap: 10px;
  color: ${COLORS.primary};
  font-weight: bold;

  & a {
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
  }
`;

const Description = styled.div`
  margin: 30px 0;
  font-size: 1.6rem;

  & > * {
    margin-top: 5px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 1.9rem;
    font-weight: bold;
  }

  & ul {
    padding: revert;
  }

  & li {
    list-style: revert;
  }
`;
