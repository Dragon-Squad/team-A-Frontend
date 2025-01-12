import CharityService from "@/apis/charity-service";
import {
  CharityByIdResponse,
  updateCharityResponse,
  updatedCharityObject,
} from "@/types/charity";
import { useState } from "react";

export const useFetchCharityByKeyword = () => {
  const [charity, setCharity] = useState<CharityByIdResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const FetchCharityByKeyword = async (keyword: string): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const data: CharityByIdResponse[] =
        await CharityService.getCharityByKeyword(keyword);
      setCharity(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred",
      );
    } finally {
      setLoading(false);
    }
  };

  return { charity, loading, error, FetchCharityByKeyword };
};

export const useUpdateCharity = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [updatedCharity, setUpdatedCharity] =
    useState<updateCharityResponse | null>(null);

  const updateCharity = async (
    updateData: updatedCharityObject,
  ): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const storedUserId = localStorage.getItem("userId");
      if (!storedUserId) {
        throw new Error("The user is not logged in ");
      }
      const data: updateCharityResponse =
        await CharityService.updateCharityById(storedUserId, updateData);
      setUpdatedCharity(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred",
      );
    } finally {
      setLoading(false);
    }
  };

  return { updatedCharity, loading, error, updateCharity };
};
