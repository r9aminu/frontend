import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFetchCategories from "../../../hooks/useFetchCategories";

export default function useGetCategories(serviceId) {
  const [searchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState([]);

  const { isLoading, isError, data: CategoryRes } = useFetchCategories(serviceId);
  const apiCategories = CategoryRes?.data?.categories;

  useEffect(() => {
    setSelectedCategories(searchParams.getAll("category") ?? []);
  }, [searchParams]);

  const categories = useMemo(() => {
    return apiCategories?.map((apiCategory) => {
      const selectedCategory = selectedCategories.find((cId) => cId === apiCategory._id);
      if (selectedCategory) return { ...apiCategory, isSelected: true };
      return { ...apiCategory, isSelected: false };
    });
  }, [apiCategories, selectedCategories]);

  const handleUpdateCategories = (categoryId) => {
    const clonedCategories = [...selectedCategories];

    const categoryIndex = clonedCategories.findIndex((cId) => cId === categoryId);
    if (categoryIndex === -1) {
      clonedCategories.push(categoryId);
    } else {
      clonedCategories.splice(categoryIndex, 1);
    }

    setSelectedCategories(clonedCategories);
  };

  const handleClearSelectedCategories = () => setSelectedCategories([]);

  return {
    selectedCategories,
    categories,
    CategoryRes,
    isLoading,
    isError,
    handleUpdateCategories,
    handleClearSelectedCategories,
  };
}
