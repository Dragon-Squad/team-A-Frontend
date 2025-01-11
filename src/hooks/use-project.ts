import { useState, useEffect, useCallback } from "react";

const API_URL = "https://crack-rightly-cow.ngrok-free.app/projects/all";

type Project = {
  _id: string;
  title: string;
  description: string;
  images: string[];
  status: string;
  goalAmount: number;
  raisedAmount: number;
  regionId: {
    name: string;
  };
  categoryId: string[];
};

type ApiResponse = {
  projects: Project[];
  total: number;
};

export const useProjects = () => {
  const [data, setData] = useState<Project[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": "69420",
          "Cache-Control": "no-cache",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(
          `Failed to fetch: ${response.status} ${response.statusText}`,
        );
      }

      const data: ApiResponse = await response.json();
      setData(data.projects || []);
      setTotal(data.total || 0);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return {
    data,
    total,
    loading,
    error,
    refresh: fetchProjects,
  };
};
