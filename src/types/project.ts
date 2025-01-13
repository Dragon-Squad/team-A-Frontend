import { Charity } from "./charity";

export type Project = {
  _id: string;
  title: string;
  description: string;
  images: string[];
  status: string;
  goalAmount: number;
  raisedAmount: number;
  regionId: {
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

export type updateProjectResponse = {
  message: string;
  project: updateProjectResponseObject;
};

export type updatedProjectObject = {
  id: string;
  name: string;
  category: string[];
  type: string;
  region: string[];
};

export type updateProject = {
  name: string;
  category: string[];
  type: string;
  region: string[];
};

export type ProjectCardProps = {
  id: string;
  name: string;
  type: string;
  category: string[];
  region: string[];
};
