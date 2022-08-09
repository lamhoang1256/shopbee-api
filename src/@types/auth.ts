export interface IUserToken {
  _id: string;
  isAdmin: boolean;
}

export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignUp {
  email: string;
  password: string;
}
