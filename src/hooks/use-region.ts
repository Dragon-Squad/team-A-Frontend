import { useState, useEffect, useCallback } from "react";
import { AllRegionResponse, Region } from "@/types/region";
import RegionService from "@/apis/region-service";

export const useRegion = () => {
  const [data, setData] = useState<Region[] | undefined>(undefined);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRegions = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response: AllRegionResponse = await RegionService.getAllRegions();
      setData(response.regions);
      setTotal(response.regions.length);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRegions();
  }, [fetchRegions]);

  return {
    data,
    total,
    loading,
    error,
    refresh: fetchRegions,
  };
};
