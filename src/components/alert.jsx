import styled from "styled-components";

export default function Alert({ children }) {
  return <AppAlert>{children}</AppAlert>;
}

const AppAlert = styled.p`
  background-color: #f76e56;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  text-align: center;

  & a {
    color: inherit;
  }
`;
