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

export type MockRegion = {
  _id: string;
  name: string;
};

export type MockCategory = {
  id: string;
  name: string;
};
