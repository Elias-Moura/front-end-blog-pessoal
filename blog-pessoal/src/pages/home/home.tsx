import homeLogo from "../../assets/home/home.png";

function Home() {
  return (
    <>
      <div className="bg-cyan-900 flex justify-center h-[80vh]">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja bem vinde!</h2>
            <p className="text-xl">
              Expresse aqui seus pensamentos e opiniões.
            </p>
            <div className="flex justify-arround gap-4">
              <button className="rounded bg-white text-blue-800 py-2 px-4">
                Ver postagens
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img
              src={homeLogo}
              alt="Imagem de login."
              className="w-2/3 h-2/3 rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
