export type Region = {
  _id: string;
  name: string;
  availableCountries: string[];
  subscriptionList: string[];
  notificationList: string[];
  __v: number;
};

export type AllRegionResponse = {
  regions: Region[];
};
