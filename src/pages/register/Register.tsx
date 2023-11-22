import { ChangeEvent, useEffect, useState } from "react";
import hiddenPass from "../login/assets/eye-svgrepo-com.svg";
import showPass from "../login/assets/eye-password-hide-svgrepo-com.svg";
import asideImg from "../login/assets/aside.png";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../contexts/AuthProvider/util";
import { AxiosResponse } from "axios";

export default function Register() {
  const [seePass, setSeePass] = useState(false);
  const navigate = useNavigate();

  const [user, setUser] = useState({email: '', password:'', confirmPassword: ''})

  function refreshState(e:ChangeEvent<HTMLInputElement>){
    setUser({...user, [e.target.name]: e.target.value})
  }

  async function handleResgister(){
    if (user.confirmPassword === user.password && user.password.length >= 8 ) {
      try {
        const response: AxiosResponse = await registerUser(user.email, user.password)
        //Todo: Replace alert
        //Todo: Filtrer inputs - validation 
        //Todo: Make this friendly for user with better messages (feedback - UX)
        alert('Usuário cadastrado com sucesso')
        console.log(response.data)
        navigate('/login')
      } catch (error) {
        alert('Erro ao cadastrar usuário')
        
      }
    } else {
      alert('Dados inconsistentes. Verifique as informações de cadastro')
      setUser({...user, password: '', confirmPassword: ''})
    }
  }

  const handleSeePass = () => {
    setSeePass(!seePass);
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleResgister()

  }

  return (
    <div
      className="
      dark:bg-zinc-600
    rounded-xl my-auto mx-[2rem] px-8 
    flex justify-around text-white bg-primary
    shadow-2xl
     "
    >
      <div className="flex flex-col items-center justify-center min-h-[500px]">
        <h2 className="text-3xl flex items-center font-bold h-[40%]">
          Cadastrar
        </h2>
        <form onSubmit={handleSubmit} className="">
          <div className="relative flex flex-col">
            <input
              type="email"
              id="email"
              name="email"
              className="peer placeholder-transparent 
                text-white bg-transparent border rounded-md p-1 px-4 mb-6
                focus:bg-none
                focus:outline-none
                "
              placeholder="email"
              value={user.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>{refreshState(e)}}
            />
            <label
              htmlFor="email"
              className="absolute -top-8 left-0 p-1 px-4
                transition-all
                peer-placeholder-shown:text-white
                peer-placeholder-shown:top-0
                peer-focus:-top-6
                peer-focus:text-sm
                "
            >
              Email
            </label>
          </div>
          <div className="relative flex flex-col ">
            <input
              required
              type={seePass ? "text" : "password"}
              id="password"
              name="password"
              placeholder=""
              className="peer placeholder-transparent 
              text-white bg-transparent
              border rounded-md 
              focus:outline-none
              p-1 px-4 mb-6"
              value={user.password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>{refreshState(e)}}
            />
            <label
              htmlFor="password"
              className="absolute -top-8 left-0 p-1 px-4
                transition-all
                peer-placeholder-shown:text-white
                peer-placeholder-shown:top-0
                peer-focus:-top-6
                peer-focus:text-sm
                "
            >
              Senha
            </label>

            <label
              className="absolute pt-1 left-[88%]  h-2 w-6"
              htmlFor="seePass"
            >
              <input
                id="seePass"
                type="checkbox"
                onChange={handleSeePass}
                className="hidden"
              />
              <img
                src={seePass ? showPass : hiddenPass}
                className="stroke-white"
                alt=""
              />
            </label>
          </div>
          <div className="relative flex flex-col ">
            <input
              required
              type={seePass ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder=""
              className="peer placeholder-transparent 
                text-white bg-transparent
                border rounded-md 
                focus:outline-none
                p-1 px-4 mb-6"
                value={user.confirmPassword}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>{refreshState(e)}}
            />
            <label
              htmlFor="confirmPassword"
              className="absolute -top-8 left-0 p-1 px-4
                transition-all
                peer-placeholder-shown:text-white
                peer-placeholder-shown:top-0
                peer-focus:-top-6
                peer-focus:text-sm
                "
            >
              Confirmar Senha
            </label>
          </div>
          <div className="flex flex-col pt-4 justify-arround gap-2">
          <button
            type="submit"
            className="text-lg w-full text-center font-bold p-2 
            border rounded-md duration-500 hover:shadow-2xl 
            hover:shadow-blue-400 hover:border hover:bg-blue-100 hover:text-black 
            text-white py-2 px-12 mb-8"
          >
            Confirmar
          </button>

        </div>
        </form>
      </div>
      <div className="hidden md:flex md:justify-center md:itens-center md:mx-0">
        <img
          src={asideImg}
          className="ml-8 w-[300px] self-center rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
}
