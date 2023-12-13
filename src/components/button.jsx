import styled from "styled-components";
import { COLORS } from "../utils/constants";

const Button = styled.button`
  appearance: button;
  color: #fff !important;
  border-radius: 3px;
  background-color: ${COLORS.primary};
  font-size: 1.6rem;
  font-weight: 600;
  padding: 19px 30px;
  min-width: 200px;
  display: block;
  border: 0;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export default Button;
