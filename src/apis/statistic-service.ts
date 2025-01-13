import {
  DONOR_STATISTIC_URL,
  CHARITY_STATISTIC_URL,
} from "@/config/httpConfig";
import {
  CharityStatistic,
  CharityStatisticResponse,
  DonorStatistic,
  DonorStatisticResponse,
} from "@/types/statistic";
import { getLocalStorageItem } from "@/utils/helper";
import { httpRequest } from "@/utils/http-request";

export default class StatisticService {
  static getDonorStatistic = async (): Promise<DonorStatistic> => {
    try {
      const userId = getLocalStorageItem("userId");
      const url = `${DONOR_STATISTIC_URL}/${userId}`;

      const headers = new Headers({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5173",
      });

      const response = await httpRequest(url, "GET", headers);

      if (!response.ok) {
        const errorData = (await response.json()) as { message: string };
        throw new Error(errorData.message || "Failed to get donor statistic");
      }

      const data = (await response.json()) as DonorStatisticResponse;
      const statisticData = data.donationStat;
      return statisticData;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred";
      throw new Error(message);
    }
  };

  static getCharityStatistic = async (): Promise<CharityStatistic> => {
    try {
      const charityId = getLocalStorageItem("charityId");
      const url = `${CHARITY_STATISTIC_URL}`;

      const headers = new Headers({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5173",
      });

      const body = JSON.stringify({ charityId });

      const response = await httpRequest(url, "GET", headers, body);

      if (!response.ok) {
        const errorData = (await response.json()) as { message: string };
        throw new Error(errorData.message || "Failed to get donor statistic");
      }

      const data = (await response.json()) as CharityStatisticResponse;
      const statisticData = data.charityProjectsDTO;
      return statisticData;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred";
      throw new Error(message);
    }
  };
}
