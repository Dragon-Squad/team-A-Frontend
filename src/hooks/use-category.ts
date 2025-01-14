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
      setData(response);
      console.log(response);
      setTotal(response.length);
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

export const useSubscribeCategory = (projectId: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const haltProject = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await CategoryService.subscribe(projectId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
    } finally {
      setLoading(false);
    }
  }, [projectId]);

  return {
    loading,
    error,
    haltProject,
  };
};

export const useUnsubscribeCategory = (projectId: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const haltProject = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await CategoryService.unsubscribe(projectId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
    } finally {
      setLoading(false);
    }
  }, [projectId]);

  return {
    loading,
    error,
    haltProject,
  };
};

export const useNotificationOnCategory = (projectId: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const haltProject = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await CategoryService.notificationOn(projectId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
    } finally {
      setLoading(false);
    }
  }, [projectId]);

  return {
    loading,
    error,
    haltProject,
  };
};

export const useNotificationOffCategory = (projectId: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const haltProject = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await CategoryService.notificationOff(projectId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
    } finally {
      setLoading(false);
    }
  }, [projectId]);

  return {
    loading,
    error,
    haltProject,
  };
};
