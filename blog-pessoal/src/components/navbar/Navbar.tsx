import { useState } from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
  
  const [loggend, setLogged] = useState(false);
  return (
    <>
      <div className="w-full bg-primary text-white flex justify-center px-10 py-5 h-">
        <div className="flex justify-between text-lg ">
          <div className="flex justify-center items-center gap-4">
            <Link to='/login' className='text-xl  p-2 border border-transparent rounded-full duration-500 hover:shadow-2xl hover:shadow-blue-400 hover:border hover:bg-blue-100 hover:text-black '>Entrar</Link>
            <Link to='/' className='text-xl p-2 border border-transparent rounded-full duration-500 hover:shadow-2xl hover:shadow-blue-400 hover:border hover:bg-blue-100 hover:text-black '>Home</Link>

            {loggend
            ?
            <><a className="text-xl font-bold p-2 border border-transparent rounded-full duration-500 hover:shadow-2xl hover:shadow-blue-400 hover:border hover:bg-blue-100 hover:text-black ">Postagens</a>
            <a className="text-xl font-bold p-2 border border-transparent rounded-full duration-500 hover:shadow-2xl hover:shadow-blue-400 hover:border hover:bg-blue-100 hover:text-black ">Temas</a>
            <a className="text-xl font-bold p-2 border border-transparent rounded-full duration-500 hover:shadow-2xl hover:shadow-blue-400 hover:border hover:bg-blue-100 hover:text-black ">Cadastrar tema</a>
            <a className="text-xl font-bold p-2 border border-transparent rounded-full duration-500 hover:shadow-2xl hover:shadow-blue-400 hover:border hover:bg-blue-100 hover:text-black ">Perfil</a>
            <a className="text-xl font-bold p-2 border border-transparent rounded-full duration-500 hover:shadow-2xl hover:shadow-blue-400 hover:border hover:bg-blue-100 hover:text-black ">Sair</a></>
            :
            ""}
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
