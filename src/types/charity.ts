export type Charity = {
  id: string;
  userId: string;
  name: string;
  address: string[];
  region: string[];
  category: string[];
  type: string;
  hashedStripeId: string;
  taxCode: string;
  __v: number;
};

export type updatedCharityObject = {
  name: string;
  category: string[];
  type: string;
  region: string[];
};

export type updateCharity = {
  name: string;
  category: string[];
  type: string;
  region: string[];
};

export type updateCharityReponseObject = {
  id: string;
  name: string;
  category: string[];
  type: string;
  region: string[];
};

export type CharityByIdResponse = {
  _id: string;
  name: string;
};

export type updateCharityResponse = {
  message: string;
  charity: updateCharityReponseObject;
};
