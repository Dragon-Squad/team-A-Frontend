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

export type EditCharityDialogProps = {
  buttonText: string;
  title: string;
  buttonStyle: string;
  submitButtonStyle: string;
  name: string;
  type: string;
  category: string[];
  region: string[];
  onSaveChanges: (
    name: string,
    type: string,
    category: string[],
    region: string[],
  ) => void;
};
