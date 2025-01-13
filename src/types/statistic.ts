export type DonorStatisticResponse = {
  userId: string;
  firstName: string;
  lastName: string;
  address: string[];
  subscription: {
    category: string[];
    region: string[];
  };
  donationStat: DonorStatistic;
};

export type DonorStatistic = {
  _id: number;
  totalDonation: number;
  monthlyDonation: number;
  projectsDonated: number;
};

export type CharityStatisticResponse = {
  charityProjectsDTO: CharityStatistic;
};

export type CharityStatistic = {
  totalDonations: number;
  totalProjects: number;
};
