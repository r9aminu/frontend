import styled from "styled-components";

import Navbar from "../../components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import Form from "./components/form";
import CategoryProvider from "./context";

export default function CategoryPage() {
  return (
    <CategoryProvider>
      <Wrapper>
        <Navbar />
        <Header />
        <FormWrapper>
          <Form />
        </FormWrapper>
        <Footer />
      </Wrapper>
    </CategoryProvider>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const FormWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
`;
