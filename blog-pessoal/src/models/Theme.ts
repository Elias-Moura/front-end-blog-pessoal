import Post from "./Post";

export default interface Theme {
  id: number,
  titulo: string,
  descricao: string,
  posts: Post[] | [], 
}