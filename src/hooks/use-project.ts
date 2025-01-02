import useSWR from "swr";
import axios from "axios";

const API_URL = "https://crack-rightly-cow.ngrok-free.app/projects/all";

const fetcher = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export const useProjects = () => {
  const { data, error, isLoading, mutate } = useSWR(API_URL, fetcher);

  return {
    data,
    projects: data?.projects || [],
    total: data?.total || 0,
    loading: isLoading,
    error,
    refresh: mutate,
  };
};
