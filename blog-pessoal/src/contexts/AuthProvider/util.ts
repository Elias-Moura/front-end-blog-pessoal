import Api from "../../service/api";
import { IUser } from "./types";

export async function loginRequest(email: string, password: string) {
  try {
    console.log({ email, "senha": password })
    const request = await Api.post("/usuarios/logar", { email, "senha": password },);
    return request.data;
  } catch (error) {
    return null;
  }
}

export async function registerUser(email: string, password: string) {
  try {
    console.log({ email, "senha": password })
    const request = await Api.post("/usuarios/cadastrar", { email, "senha": password },);
    return request.data;
  } catch (error) {
    console.error(error)
    return null;
  }
}

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem("user");

  if (!json){
    return null
  }

  const user = JSON.parse(json)
  return user ?? null;
}
