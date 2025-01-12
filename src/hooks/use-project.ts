import { useState, useEffect, useCallback } from "react";

import { PROJECT_URL } from "@/config/httpConfig";

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
      const response = await fetch(`${PROJECT_URL}/all`, {
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

type Charity = {
  _id: string;
  userId: string;
  name: string;
  address: string[];
  region: any[];
  category: string[];
  type: string;
  hashedStripeId: string;
  taxCode: string;
  __v: number;
};

type Category = {
  id: string;
  name: string;
};

type Region = {
  id: string;
  name: string;
};

type ProjectByIdDetail = {
  id: string;
  title: string;
  description: string;
  goalAmount: number;
  raisedAmount: number;
  startDate: string;
  endDate: string;
  status: string;
  charity: Charity;
  categories: Category[];
  region: Region;
  createdAt: string;
  images: string[];
  videos: string[];
};

export const useProjectById = (id: string) => {
  const [data, setData] = useState<ProjectByIdDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjectById = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${PROJECT_URL}/${id}`, {
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

      const projectData: ProjectByIdDetail = await response.json();
      setData(projectData); // Set the data to the state
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      fetchProjectById();
    }
  }, [fetchProjectById, id]);

  return {
    data,
    loading,
    error,
    refresh: fetchProjectById,
  };
};
