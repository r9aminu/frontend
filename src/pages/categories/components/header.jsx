import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const handleNavigateToHomePage = () => navigate("/");

  return (
    <Wrapper>
      <AiOutlineLeft className="pointer" onClick={handleNavigateToHomePage} />
      <p>Back to resources</p>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  gap: 15px;
  align-items: center;

  color: #666;
  line-height: 1.5;
  font-size: 1.5rem;
  border-bottom: 1px solid #f4f4f4;
  padding-left: 35px;
  padding-top: 20px;
  padding-bottom: 20px;
`;
