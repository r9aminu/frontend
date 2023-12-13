import styled from "styled-components";
import ResourceItem from "./resource-item";

export default function Content({ resources }) {
  return (
    <ContentWrapper>
      <VStack>
        {resources?.map((resource) => (
          <ResourceItem key={resource._id} resource={resource} />
        ))}
      </VStack>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.section`
  flex: 6;
`;

const VStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
