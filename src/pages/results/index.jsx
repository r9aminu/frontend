import styled from "styled-components";

import Header from "./components/header";
import MainSection from "./components/main";
import Navbar from "../../components/navbar";
import ResourceProvider from "./context";

export default function ResultsPage() {
  return (
    <ResourceProvider>
      <Wrapper>
        <Navbar />
        <Header />
        <MainSection />
      </Wrapper>
    </ResourceProvider>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
