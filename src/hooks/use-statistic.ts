import StatisticService from "@/apis/statistic-service";
import { CharityStatistic, DonorStatistic } from "@/types/statistic";
import { useCallback, useEffect, useState } from "react";

export const useDonorStatistic = () => {
  const [statistic, setStatistic] = useState<DonorStatistic | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDonorStatistic = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data: DonorStatistic = await StatisticService.getDonorStatistic();
      setStatistic(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDonorStatistic();
  }, [fetchDonorStatistic]);

  return {
    statistic,
    loading,
    error,
    refresh: fetchDonorStatistic,
  };
};

export const useCharityStatistic = () => {
  const [CharityStatistic, setStatistic] = useState<CharityStatistic | null>(
    null,
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCharityStatistic = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data: CharityStatistic =
        await StatisticService.getCharityStatistic();
      setStatistic(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCharityStatistic();
  }, [fetchCharityStatistic]);

  return {
    CharityStatistic,
    loading,
    error,
    refresh: fetchCharityStatistic,
  };
};
