import { CreateProjectDialogProps } from "./project";

export type Category = {
  id: string;
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
};
