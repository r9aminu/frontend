import { useMemo, useState } from "react";

export default function useGetCategories(categoryApiRes) {
  const apiCategories = categoryApiRes?.data?.categories;
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = useMemo(() => {
    if (!apiCategories) return [];

    return apiCategories?.map((category) => {
      const selectedCategory = selectedCategories.find((s) => s._id === category._id);
      if (selectedCategory) return { ...category, isSelected: true };
      return { ...category, isSelected: false };
    });
  }, [apiCategories, selectedCategories]);

  const handleUpdateCategories = (category) => {
    const clonedCategories = [...selectedCategories];

    const categoryIndex = clonedCategories.findIndex((c) => c._id === category._id);
    if (categoryIndex === -1) {
      clonedCategories.push(category);
    } else {
      clonedCategories.splice(categoryIndex, 1);
    }

    setSelectedCategories(clonedCategories);
  };

  return { categories, selectedCategories, handleUpdateCategories };
}
