import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="w-full bg-indigo-900 text-white flex justify-center px-10 py-[.94rem] h-">
        <div className="container flex justify-between text-lg">
          <div className="text-2x1 font-bold uppercase">Blog pessoal</div>
          <div className="flex gap-4">
            <Link to='/login' className='hoover:underline'>Logar</Link>
            <Link to='/' className='hoover:underline'>Home</Link>
            <div className="hoover:underline">Postagens</div>
            <div className="hoover:underline">Temas</div>
            <div className="hoover:underline">Cadastrar tena</div>
            <div className="hoover:underline">Perfil</div>
            <div className="hoover:underline">Sair</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
