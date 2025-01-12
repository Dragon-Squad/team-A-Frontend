import { useState, useEffect, useCallback } from "react";
import { ApiResponse, Project, ProjectByIdDetail } from "@/types/project";
import ProjectService from "@/apis/project-service";

export const useProjects = () => {
  const [data, setData] = useState<Project[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data: ApiResponse = await ProjectService.getAllProjects();
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

export const useProjectById = (id: string) => {
  const [data, setData] = useState<ProjectByIdDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjectById = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const projectData: ProjectByIdDetail =
        await ProjectService.getProjectById(id);
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
