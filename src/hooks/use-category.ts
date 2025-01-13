import { useState, useEffect, useCallback } from "react";
import { AllCategoryResponse, Category } from "@/types/category";
import CategoryService from "@/apis/category-service";

export const useCategory = () => {
  const [data, setData] = useState<Category[] | undefined>(undefined);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response: AllCategoryResponse =
        await CategoryService.getAllCategories();
      setData(response.categories);
      setTotal(response.categories.length);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return {
    data,
    total,
    loading,
    error,
    refresh: fetchCategories,
  };
};
