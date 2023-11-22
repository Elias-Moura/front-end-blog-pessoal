import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import hiddenPass from "./assets/eye-svgrepo-com.svg";
import showPass from "./assets/eye-password-hide-svgrepo-com.svg";
import asideImg from "./assets/aside.png";
import { useAuth } from "../../contexts/AuthProvider/useAuth";
import toastAlert from "../../utils/toastAlert";

function Login() {
  const [seePass, setSeePass] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });

  const auth = useAuth();
  const navigate = useNavigate();

  function refreshState(e: ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handleSeePass = () => {
    setSeePass(!seePass);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const response = await auth.authenticate(user.email, user.password);

    if (response == "200") {
      navigate("/posts");
      toastAlert("Usuário logado.", "success");
    } else {
      toastAlert(response, "error");
    }
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
        <h2 className="text-3xl flex items-center font-bold h-[40%]">Entrar</h2>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="relative flex flex-col">
            <input
              required
              type="email"
              id="email"
              name="email"
              placeholder="email"
              className="peer 
                placeholder-transparent
                text-white bg-transparent border 
                rounded-md p-1 px-4 mb-5
                focus:bg-none
                focus:outline-none
                "
              value={user.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                refreshState(e);
              }}
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
                p-1 px-4 mb-4"
              value={user.password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                refreshState(e);
              }}
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
          <button
            type="submit"
            className="text-lg w-full text-center font-bold p-2 
            border rounded-md duration-500 hover:shadow-2xl 
            hover:shadow-blue-400 hover:border hover:bg-blue-100 hover:text-black 
            text-white  py-2 px-12"
          >
            Entrar
          </button>
        </form>

        <div className="flex flex-col pt-4 justify-arround gap-2">
          {/* <Link
            to={"/recover-password"}
            className="text-lg w-full text-center font-bold p-2 border border-transparent rounded-md duration-500 hover:shadow-2xl hover:shadow-blue-400 hover:border hover:bg-blue-100 hover:text-black 
          text-white  py-2 px-12 "
          >
            Esqueceu sua senha?
          </Link> */}
          <Link
            to={"/cadastrar"}
            className="text-lg w-full text-center font-bold p-2 border border-transparent rounded-md duration-500 hover:shadow-2xl hover:shadow-blue-400 hover:border hover:bg-blue-100 hover:text-black 
          text-white  py-2 px-12 mb-4"
          >
            Cadastre-se
          </Link>
        </div>
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

export default Login;
