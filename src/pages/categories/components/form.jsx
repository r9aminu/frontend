import styled from "styled-components";
import ListItems from "./list-items";
import { useCategoryContext } from "../context";

export default function Form() {
  const { isLoading, error, categoryRes } = useCategoryContext();

  if (error || !categoryRes) return <></>;

  return (
    <Wrapper>
      <Heading>Select all that apply</Heading>
      <ListItems />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 50px 10px;
`;

const Heading = styled.p`
  font-size: 2.2rem;
  font-weight: 600;
  margin: 15px 0;
`;
