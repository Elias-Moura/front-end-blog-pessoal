import { useAuth } from "../../contexts/AuthProvider/useAuth"
import { Link } from "react-router-dom"

export const ProtectedLayout = ({children}: {children: JSX.Element}) => {
  const auth = useAuth()

  if (!auth.email) {
    return (
    <div className="bg-primary dark:bg-zinc-600  max-w-[30vw] p-8 rounded-md flex flex-col items-center justify-center">
      <span className="text-3xl text-white mb-10 wrap text-center">Opa, parece que você não está logado.</span>

      <Link
            to={"/login"}
            className="text-lg  w-full text-center font-bold p-2 border rounded-md duration-500 hover:shadow-2xl hover:shadow-blue-400 hover:border hover:bg-blue-100 hover:text-black 
            text-white py-2 px-12 mb-4"
          >
            Entrar
      </Link>
      <Link
            to={"/cadastrar"}
            className="text-lg w-full text-center font-bold p-2 border  rounded-md duration-500 hover:shadow-2xl hover:shadow-blue-400 hover:border hover:bg-blue-100 hover:text-black 
           text-white py-2 px-12 mb-4"
          >
            Cadastre-se
      </Link>
    </div>
    )
  }
  return children
}