import Post from "./Post";

export default interface User{
  id:number;
  name: string;
  email: string;
  picture: string;
  posts: [Post] | null;
}