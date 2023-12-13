import { createContext, useContext } from "react";
import useParam from "../../../hooks/useParam";
import useFetchCategories from "../../../hooks/useFetchCategories";
import useGetCategories from "../hooks/useGetCategories";

const CategoryContext = createContext(null);

export default function CategoryProvider({ children }) {
  const serviceId = useParam();
  const { isLoading, error, data: categoryRes } = useFetchCategories(serviceId);
  const { categories, selectedCategories, handleUpdateCategories } = useGetCategories(categoryRes);

  return (
    <CategoryContext.Provider
      value={{
        serviceId,
        isLoading,
        error,
        categories,
        selectedCategories,
        categoryRes,
        handleUpdateCategories,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

export const useCategoryContext = () => useContext(CategoryContext);
