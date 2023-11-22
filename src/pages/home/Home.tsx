import homeLogo from "./assets/test.jpg";

export default function Home() {
  return (
    <div
      className="
        dark:bg-zinc-600
        rounded-xl my-auto mx-[2rem] px-8
        flex justify-around text-white bg-primary
        shadow-2xl
        "
    >
      <div className="flex flex-col gap-4 items-center justify-center min-w-[300px] min-h-[500px]">
        <div className="flex flex-col items-center h-[30%] mt-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Seja bem vinde!
          </h2>
          <p className="text-xl">Blog pessoal</p>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <a
            href="/login"
            className="text-xl text-center w-full font-bold 
              border rounded-md duration-500 hover:shadow-2xl 
              hover:shadow-blue-400 hover:border hover:bg-blue-100 
              hover:text-black 
              text-white py-2 px-14
              "
          >
            Entrar
          </a>
          <a
            href="/cadastrar"
            className="text-xl text-center w-full font-bold 
              border border-transparent rounded-md duration-500 hover:shadow-2xl 
              hover:shadow-blue-400 hover:border hover:bg-blue-100 
              hover:text-black 
               text-white py-2 px-14
              "
          >
            Cadastre-se
          </a>
          <a
            href="/posts"
            className="text-xl text-center w-full font-bold 
              border border-transparent rounded-md duration-500 hover:shadow-2xl 
              hover:shadow-blue-400 hover:border hover:bg-blue-100 
              hover:text-black 
              text-white  py-2 px-14
              "
          >
            Ler posts
          </a>
        </div>
      </div>

      <div className="hidden md:flex md:justify-center md:itens-center ">
        <img
          src={homeLogo}
          alt="Imagem de login."
          className="ml-8 w-[300px] self-center rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
}
