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
