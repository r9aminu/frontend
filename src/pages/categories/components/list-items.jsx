import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { COLORS } from "../../../utils/constants";
import { useCategoryContext } from "../context";
// import Alert from "../../../components/alert";

export default function ListItems() {
  const { categories, handleUpdateCategories } = useCategoryContext();

  return (
    <Items>
      {categories.map((category) => (
        <Item key={category._id}>
          <Checkbox
            type="checkbox"
            checked={category.isSelected}
            onChange={() => handleUpdateCategories(category)}
          />
          <ItemName>{category.name}</ItemName>
        </Item>
      ))}
    </Items>
  );
}

const Items = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Item = styled.li`
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  padding: 15px 10px;
  list-style: none;
`;

const Checkbox = styled.input`
  margin: 0 12px;
`;

const ItemName = styled.p`
  color: ${COLORS.primary};
  font-size: 600;
`;
