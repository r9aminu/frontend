import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/button";
import { COLORS } from "../../../utils/constants";
import { useCategoryContext } from "../context";

export default function Footer() {
  const navigate = useNavigate();
  const { serviceId, selectedCategories } = useCategoryContext();

  const handleNavigateToHomePage = () => navigate("/");

  const handleNavigateToResultsPage = () => {
    const searchParams = new URLSearchParams();
    searchParams.append("serviceId", serviceId);
    selectedCategories.forEach((c) => searchParams.append("category", c._id));

    navigate("/resources?" + searchParams.toString());
  };

  return (
    <Wrapper>
      <OutlineButton onClick={handleNavigateToHomePage}>Back</OutlineButton>
      <FooterButton
        onClick={handleNavigateToResultsPage}
        disabled={selectedCategories.length > 0 ? false : true}
      >
        Next
      </FooterButton>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  border-top: 1px solid #f4f4f4;
  padding: 20px 0;

  display: flex;
  justify-content: flex-end;

  position: static;
  bottom: 0;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    justify-content: initial;
    padding: 20px;
    gap: 10px;
  }
`;

const FooterButton = styled(Button)`
  padding: 12px 13px;
  margin-right: 15px;

  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
  opacity: ${(p) => (p.disabled ? 0.7 : 1)};
`;

const OutlineButton = styled(FooterButton)`
  background-color: transparent;
  color: ${COLORS.primary};
  border: 1px solid ${COLORS.primary};
`;
