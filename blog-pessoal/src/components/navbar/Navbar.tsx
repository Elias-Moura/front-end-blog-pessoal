import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import sunImg from "./images/sun.svg";
import moonImg from "./images/moon.svg";
import { ThemeContext } from "../../contexts/themeInfo";
import { useAuth } from "../../contexts/AuthProvider/useAuth";

function Navbar() {
  const [loggend, setLogged] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  
  const navigate = useNavigate()
  const auth = useAuth()

  useEffect(() => {
    if (auth.email) {
      setLogged(true);
    }else {
      setLogged(false);
    }
  }, [auth.email])


  function handleToggleTheme(){
    if ( theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  function handleLogout() {
    auth.logout()
    navigate('/')
  }

  return (
    <div
      className="w-full bg-primary text-white 
    dark:bg-zinc-950 dark:text-white
    flex justify-center px-10 py-5 h-"
    >
      <div className="flex justify-between text-lg ">
        <div className="flex justify-center items-center gap-4 ">
          {!loggend ? (
            <>
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
            </>
          ): (
            ""
          )
          }


          {loggend ? (
            <>
              <Link to='/posts' className="text-xl font-bold p-2 border border-transparent rounded-full duration-500 hover:shadow-2xl hover:shadow-blue-400 hover:border hover:bg-blue-100 hover:text-black ">
                Postagens
              </Link>
              <Link to='/temas' className="text-xl font-bold p-2 border border-transparent rounded-full duration-500 hover:shadow-2xl hover:shadow-blue-400 hover:border hover:bg-blue-100 hover:text-black ">
                Temas
              </Link>
              <Link to='perfil' className="text-xl font-bold p-2 border border-transparent rounded-full duration-500 hover:shadow-2xl hover:shadow-blue-400 hover:border hover:bg-blue-100 hover:text-black ">
                Perfil
              </Link>
              <button onClick={handleLogout} className="text-xl font-bold p-2 border border-transparent rounded-full duration-500 hover:shadow-2xl hover:shadow-blue-400 hover:border hover:bg-blue-100 hover:text-black ">
                Sair
              </button>
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
              <img width="35px" src={moonImg} alt="Botão para trocar o tema entre claro e escuro." />
             : 
              <img width="35px" src={sunImg} alt="Botão para trocar o tema entre claro e escuro." />
            }
          </label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
