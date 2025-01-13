import { Charity } from "./charity";

export type Project = {
  _id: string;
  title: string;
  description: string;
  images: string[];
  status: string;
  goalAmount: number;
  raisedAmount: number;
  region: {
    name: string;
  };
  categoryId: string[];
};

export type ApiResponse = {
  projects: Project[];
  total: number;
};

export type ProjectByIdDetail = {
  id: string;
  title: string;
  description: string;
  goalAmount: number;
  raisedAmount: number;
  startDate: string;
  endDate: string;
  status: string;
  charity: Charity;
  categories: Category[];
  region: Region;
  createdAt: string;
  images: string[];
  videos: string[];
};

type Category = {
  id: string;
  name: string;
};

type Region = {
  id: string;
  name: string;
};

export type updateProjectResponseObject = {
  id: string;
  name: string;
  category: string[];
  type: string;
  region: string[];
};

export type updatedProjectObject = {
  charityId: string;
  cagetoryIds: string[];
  regionId: string;
  title: string;
  goalAmount: number;
  startDate: string;
  endDate: string;
};

export type updateProject = {
  charityId: string;
  cagetoryIds: string[];
  regionId: string;
  title: string;
  goalAmount: number;
  startDate: string;
  endDate: string;
};

export type updateProjectResponse = {
  id: string;
  title: string;
  goalAmount: number;
  raisedAmount: number;
  startDate: string;
  endDate: string;
  status: string;
  charity: {
    _id: string;
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
  categories: {
    id: string;
    name: string;
  }[];
  region: {
    id: string;
    name: string;
  };
  createdAt: string;
  images: string[];
  videos: string[];
};

export type createProjectResponse = {
  id: string;
  title: string;
  goalAmount: number;
  raisedAmount: number;
  startDate: string;
  endDate: string;
  status: string;
  charity: {
    _id: string;
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
  categories: {
    id: string;
    name: string;
  }[];
  region: {
    id: string;
    name: string;
  };
  createdAt: string;
  images: string[];
  videos: string[];
};

export type ProjectCardProps = {
  id: string;
  name: string;
  type: string;
  category: string[];
  region: string[];
};

export type CreateProjectDialogProps = {
  triggerClassName: string;
  categories: Category[];
};

export type EditProjectDialogProps = {
  triggerClassName: string;
};

export type CreateProject = {
  charityId: string;
  description: string;
  categoryIds: string[];
  regionId: string;
  title: string;
  goalAmount: number;
  startDate: string;
  endDate: string;
};

export type EditProject = {
  charityId: string;
  description: string;
  categoryIds: string[];
  regionId: string;
  title: string;
  goalAmount: number;
  startDate: string;
  endDate: string;
};

export type FetchProjectCardProps = {
  categories: Category[];
  regions: Region[];
};

export type ProjectsCardProps = {
  project: Project;
  categories: Category[];
  regions: Region[];
};
