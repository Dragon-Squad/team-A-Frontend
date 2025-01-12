import CharityService from "@/apis/charity-service";
import { CharityByIdResponse } from "@/types/charity";
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
