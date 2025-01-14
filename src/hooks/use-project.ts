import { useState, useEffect, useCallback } from "react";
import {
  ApiResponse,
  CreateProject,
  createProjectResponse,
  EditProject,
  Project,
  ProjectByIdDetail,
  updatedProjectObject,
  updateProjectResponse,
} from "@/types/project";
import ProjectService from "@/apis/project-service";

export const useProjects = (
  name?: string,
  charityName?: string,
  categoryIds?: string[],
  regionId?: string,
) => {
  const [data, setData] = useState<Project[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data: ApiResponse = await ProjectService.getAllProjects(
        name,
        charityName,
        categoryIds,
        regionId,
      );
      setData(data.projects || []);
      setTotal(data.total || 0);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
    } finally {
      setLoading(false);
    }
  }, [name, charityName, categoryIds, regionId]);

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

export const useProjectByCharityId = (charityId: string) => {
  const [data, setData] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState<number>(0);
  const fetchProjectByCharityIds = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data: ApiResponse =
        await ProjectService.getProjectByCharityIds(charityId);
      setData(data.projects || []);
      setTotal(data.total || 0);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
    } finally {
      setLoading(false);
    }
  }, [charityId]);

  useEffect(() => {
    if (charityId) {
      fetchProjectByCharityIds();
    }
  }, [fetchProjectByCharityIds, charityId]);

  return {
    data,
    total,
    loading,
    error,
    refresh: fetchProjectByCharityIds,
  };
};

export const useUpdateProject = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [updatedProject, setUpdatedProject] =
    useState<updateProjectResponse | null>(null);

  const updateProject = async (
    projectId: string,
    updateData: EditProject,
  ): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const data: updateProjectResponse =
        await ProjectService.updateProjectById(projectId, updateData);
      setUpdatedProject(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred",
      );
    } finally {
      setLoading(false);
    }
  };

  return { updatedProject, loading, error, updateProject };
};

export const useCreateProject = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [createdProject, setCreatedProject] =
    useState<createProjectResponse | null>(null);

  const createProject = async (updateData: CreateProject): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const data: createProjectResponse =
        await ProjectService.create(updateData);
      setCreatedProject(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred",
      );
    } finally {
      setLoading(false);
    }
  };

  return { createdProject, loading, error, createProject };
};
