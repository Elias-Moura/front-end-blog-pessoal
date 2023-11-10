import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import sunImg from "./images/sun.svg";
import moonImg from "./images/moon.svg";
import { ThemeContext } from "../../contexts/themeInfo";

function Navbar() {
  const [loggend, setLogged] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  function handleToggleTheme(){
    if ( theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <div
      className="w-full bg-primary text-white 
    dark:bg-zinc-950 dark:text-white
    flex justify-center px-10 py-5 h-"
    >
      <div className="flex justify-between text-lg ">
        <div className="flex justify-center items-center gap-4 ">
          <Link
            to="/login"
            className="text-xl  p-2 border border-transparent rounded-full duration-500 hover:shadow-2xl hover:shadow-blue-400 hover:border hover:bg-blue-100 hover:text-black "
          >
            Entrar
          </Link>
          <Link
            to="/"
            className="text-xl p-2 border border-transparent rounded-full duration-500 hover:shadow-2xl hover:shadow-blue-400 hover:border hover:bg-blue-100 hover:text-black "
          >
            Home
          </Link>

          {loggend ? (
            <>
              <a className="text-xl font-bold p-2 border border-transparent rounded-full duration-500 hover:shadow-2xl hover:shadow-blue-400 hover:border hover:bg-blue-100 hover:text-black ">
                Postagens
              </a>
              <a className="text-xl font-bold p-2 border border-transparent rounded-full duration-500 hover:shadow-2xl hover:shadow-blue-400 hover:border hover:bg-blue-100 hover:text-black ">
                Temas
              </a>
              <a className="text-xl font-bold p-2 border border-transparent rounded-full duration-500 hover:shadow-2xl hover:shadow-blue-400 hover:border hover:bg-blue-100 hover:text-black ">
                Cadastrar tema
              </a>
              <a className="text-xl font-bold p-2 border border-transparent rounded-full duration-500 hover:shadow-2xl hover:shadow-blue-400 hover:border hover:bg-blue-100 hover:text-black ">
                Perfil
              </a>
              <a className="text-xl font-bold p-2 border border-transparent rounded-full duration-500 hover:shadow-2xl hover:shadow-blue-400 hover:border hover:bg-blue-100 hover:text-black ">
                Sair
              </a>
            </>
          ) : (
            ""
          )}
          <input
            type="checkbox"
            id="darkModeCheck"
            className="hidden"
            onChange={() => {
              handleToggleTheme();
            }}
          />
          <label htmlFor="darkModeCheck" className="border border-transparent p-1 rounded-full duration-500 hover:shadow-2xl hover:shadow-blue-400 hover:border hover:bg-zinc-800 hover:text-black">
            {theme === 'light' ? 
              <img width="35px" src={moonImg} alt="" />
             : 
              <img width="35px" src={sunImg} alt="" />
            }
          </label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
