export interface IUser {
  _id: string;
  accessToken: string;
  refreshToken: string;
  street: string;
  address: string;
  city: { id: string; name: string };
  district: { id: string; name: string };
  ward: { id: string; name: string };
  fullname: string;
  email: string;
  avatar: string;
  phone: string;
  isAdmin: boolean;
  password?: string;
  createdAt: string;
  updatedAt: string;
  vouchersSave: [];
  __v: number;
}
