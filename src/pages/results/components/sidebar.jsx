import styled from "styled-components";
import { useResourceContext } from "../context";

export default function Sidebar() {
  const {
    categories,
    isCategoriesLoading,
    isCategoriesError,
    handleUpdateCategories,
    handleClearSelectedCategories,
  } = useResourceContext();

  const renderCategories = () => {
    if (isCategoriesError || !categories) return <></>;

    return (
      <CategoryWrapper>
        <CategoryHeading>Categories</CategoryHeading>
        <VStack>
          {categories.map((category) => (
            <Item key={category._id}>
              <input
                type="checkbox"
                checked={category.isSelected}
                onChange={() => handleUpdateCategories(category._id)}
              />
              <p>{category.name}</p>
            </Item>
          ))}
        </VStack>
      </CategoryWrapper>
    );
  };

  return (
    <Wrapper>
      <MainHeading>Filter Resources</MainHeading>
      <SubHeading onClick={handleClearSelectedCategories}>Clear All</SubHeading>

      {renderCategories()}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* height: 100%; */
  padding: 20px 25px 50px 30px;
  border-right: 1px solid #f4f4f4;
  /* min-width: 100%; */
  /* top: 80px; */

  @media screen and (min-width: 768px) {
    overflow-y: auto;
    position: sticky;
    top: 0;
    max-height: calc(100vh - 100px);
    max-width: 290px;
    flex-shrink: 0;
  }
`;

const MainHeading = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
`;

const SubHeading = styled.p`
  margin-top: 13px;
  font-size: 16px;
  color: #276ce5;
  cursor: pointer;
`;

const CategoryWrapper = styled.ul`
  margin-top: 32px;
`;

const CategoryHeading = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
`;

const VStack = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

const Item = styled.li`
  color: #888;
  list-style: none;
  font-size: 1.4rem;
  display: flex;
  gap: 10px;
  align-items: center;
`;
