import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../../utils/constants";

export default function ServiceItem({ _id, name, imageURL }) {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/categories?serviceId=" + _id);

  return (
    <Service onClick={handleNavigate}>
      <ServiceImage src={imageURL} alt={name} />
      <ServiceName>{name}</ServiceName>
    </Service>
  );
}

const Service = styled.div`
  cursor: pointer;
  flex: 1;
  padding: 20px;
  border-radius: 3px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  min-width: calc(100% / 3 - 25px);
  --color: ${COLORS.primary};

  &:hover {
    background-color: ${COLORS.primary};
    --color: #fff;
  }
`;

const ServiceImage = styled.img`
  margin-right: 20px;
  width: 60px;
  height: 60px;

  ${Service}:hover & {
    filter: brightness(0) invert(1);
  }
`;

const ServiceName = styled.p`
  font-weight: bold;
  font-size: 2.4rem;
  color: var(--color);
`;
