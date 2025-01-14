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
      setData(response);
      setTotal(response.length);
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

export const useSubscribeRegion = (projectId: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const subscribe = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await RegionService.subscribe(projectId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
    } finally {
      setLoading(false);
    }
  }, [projectId]);

  return {
    loading,
    error,
    subscribe,
  };
};

export const useUnsubscribeRegion = (projectId: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const unsubscribe = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await RegionService.unsubscribe(projectId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
    } finally {
      setLoading(false);
    }
  }, [projectId]);

  return {
    loading,
    error,
    unsubscribe,
  };
};

export const useNotificationOnRegion = (projectId: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const notificationOn = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await RegionService.notificationOn(projectId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
    } finally {
      setLoading(false);
    }
  }, [projectId]);

  return {
    loading,
    error,
    notificationOn,
  };
};

export const useNotificationOffRegion = (projectId: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const notificationOff = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await RegionService.notificationOff(projectId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
    } finally {
      setLoading(false);
    }
  }, [projectId]);

  return {
    loading,
    error,
    notificationOff,
  };
};
