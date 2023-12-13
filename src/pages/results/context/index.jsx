import { createContext, useContext } from "react";
import useParam from "../../../hooks/useParam";
import useGetCategories from "../hooks/useGetCategories";

const ResourceContext = createContext(null);

export default function ResourceProvider({ children }) {
  const serviceId = useParam();
  const {
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
    categories,
    CategoryRes,
    selectedCategories,
    handleUpdateCategories,
    handleClearSelectedCategories,
  } = useGetCategories(serviceId);

  return (
    <ResourceContext.Provider
      value={{
        serviceId,
        isCategoriesLoading,
        isCategoriesError,
        categories,
        selectedCategories,
        CategoryRes,
        handleUpdateCategories,
        handleClearSelectedCategories,
      }}
    >
      {children}
    </ResourceContext.Provider>
  );
}

export const useResourceContext = () => useContext(ResourceContext);
