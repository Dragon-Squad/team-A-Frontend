export type Charity = {
  _id: string;
  userId: string;
  name: string;
  address: string[];
  region: unknown[];
  category: string[];
  type: string;
  hashedStripeId: string;
  taxCode: string;
  __v: number;
};

export type CharityByIdResponse = {
  _id: string;
  name: string;
};
