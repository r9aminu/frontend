import styled from "styled-components";

import Sidebar from "./sidebar";
import Content from "./content";
import { useResourceContext } from "../context";
import useFetchResources from "../hooks/useFetchResources";

export default function MainSection() {
  const { serviceId, selectedCategories, CategoryRes } = useResourceContext();
  const {
    isLoading,
    isError,
    data: resourcesRes,
  } = useFetchResources({ serviceId, categories: selectedCategories, isEnabled: !!CategoryRes });

  const renderResources = () => {
    if (isError || !resourcesRes) return <></>;

    return (
      <MainWrapper>
        <Content resources={resourcesRes?.data?.resources} />
      </MainWrapper>
    );
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <Sidebar />
        {renderResources()}
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const InnerWrapper = styled.div`
  display: flex;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const MainWrapper = styled.main`
  flex: 1;
  padding: 20px 25px 0 0;
  display: flex;
`;
