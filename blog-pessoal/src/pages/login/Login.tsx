import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import hiddenPass from "./assets/eye-svgrepo-com.svg";
import showPass from "./assets/eye-password-hide-svgrepo-com.svg";
import asideImg from "./assets/aside.png";

function Login() {
  const navigate = useNavigate();

  const [seePass, setSeePass] = useState(false);
  // useEffect(()=>{},[seePass]);

  const handleSeePass = () => {
    setSeePass(!seePass);
  };

  return (
    <div className="grow bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center p-10">
      <div
        className="
    rounded-xl my-auto mx-[2rem] px-8 
    flex justify-around text-white bg-primary
    shadow-2xl
     "
      >
        <div className="flex flex-col items-center justify-center min-h-[500px]">
          <h2 className="text-3xl flex items-center font-bold h-[40%]">
            Entrar
          </h2>
          <form className="">
            <div className="relative flex flex-col">
              <input
                type="text"
                id="email"
                name="email"
                className="peer placeholder-transparent 
                text-white bg-primary border rounded-md p-1 px-4 mb-8
                focus:bg-none
                focus:outline-none
                "
                placeholder="email"
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
                type={seePass ? "text" : "password"}
                id="password"
                name="password"
                placeholder=""
                className="peer placeholder-transparent 
                text-white bg-primary 
                border rounded-md 
                focus:outline-none
                p-1 px-4 mb-4"
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
          </form>

          <div className="flex flex-col pt-4 justify-arround gap-2">
            <a
              href="/login"
              className="text-lg w-full text-center font-bold p-2 border rounded-md duration-500 hover:shadow-2xl hover:shadow-blue-400 hover:border hover:bg-blue-100 hover:text-black 
          rounded-md text-lg text-white text-blue-800 py-2 px-12"
            >
              Entrar
            </a>
            <a
              href="/recover-password"
              className="text-lg w-full text-center font-bold p-2 border border-transparent rounded-md duration-500 hover:shadow-2xl hover:shadow-blue-400 hover:border hover:bg-blue-100 hover:text-black 
          rounded-md text-lg text-white text-blue-800 py-2 px-12 "
            >
              Esqueceu sua senha?
            </a>
            <a
              href="/cadastrar"
              className="text-lg w-full text-center font-bold p-2 border border-transparent rounded-md duration-500 hover:shadow-2xl hover:shadow-blue-400 hover:border hover:bg-blue-100 hover:text-black 
          rounded-md text-lg text-white text-blue-800 py-2 px-12 mb-4"
            >
              Cadastre-se
            </a>
          </div>
        </div>
        <div className='hidden md:flex md:justify-center md:itens-center md:mx-0'>
          <img src={asideImg} className='ml-8 w-[300px] self-center rounded-xl shadow-2xl'  />
        </div>
      </div>
    </div>
  );
}

export default Login;
