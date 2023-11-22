export interface IUser {
  email?: string;
  token?: string;
}

export interface IContext extends IUser {
  authenticate: (email: string, password: string) => Promise<string>| string;
  logout: () => void;
}

export interface IAuthProvider {
  children: JSX.Element
}
