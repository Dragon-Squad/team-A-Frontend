import { CreateProjectDialogProps } from "./project";
import { Region } from "./region";

export type Category = {
  _id: string;
  name: string;
  subscriptionList: string[];
  notificationList: {
    email: string;
    name: string;
    _id: string;
  }[];
  __v: number;
};

export type AllCategoryResponse = {
  categories: Category[];
};

export type Props = CreateProjectDialogProps & {
  categories: Category[];
  regions: Region[];
};
