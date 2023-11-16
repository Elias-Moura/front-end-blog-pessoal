import { useState } from "react";
import { useCreateThemeForm } from "../../contexts/create-theme-form/useCreateThemeForm";
import { updateTheme } from "../../service/theme/themeAPI";


interface Props {
  id: number,
  titulo: string;
  descricao: string;
}

export default function Theme({id, titulo, descricao} : Props) {
  const { show } = useCreateThemeForm();
  const [update, setUpdate] = useState(false);
  const [tema, setTema] = useState<Props>({id: id, titulo: titulo, descricao: descricao })

  async function handleEdit() {
    console.log("editar", tema) ;

    const response = await updateTheme(tema)

    console.log("Response: ", response)
  }

  function handleDelete() {
    console.log("deletei.")
  }

  function refreshState(e:ChangeEvent<HTMLInputElement>){
    setTema({...tema, [e.target.name]: e.target.value})
  }

  return (
    <div
      className="
        dark:bg-zinc-600
        rounded-xl mx-[2rem] px-8
        flex text-white bg-primary
        shadow-2xl
        w-[60%]
        lg:w-[80%] lg:max-w-[370px]
        xl:w-[85%] xl:max-w-[370px]
        justify-self-center
        hover:scale-110 duration-300
        "
    >
      <div className="flex flex-col justify-center min-h-[450px] w-[100%] gap-[4rem]">
        <div className="flex flex-col  items-center min-h-[40%]">
            <textarea
              name="titulo"
              className="bg-transparent grow text-center text-3xl md:text-4xl font-bold w-full
              focus:outline-none focus:ring-0 resize-none h-[100%]
              "
              value={tema.titulo}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>{refreshState(e)}}
            />
            <textarea
              name="descricao"
              className="bg-transparent text-xl w-full h-[100%] mt-4
              focus:outline-none focus:ring-0 resize-none
              "
              value={tema.descricao}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>{refreshState(e)}}
            />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <button
            disabled={show}
            onClick={handleEdit}
            className="text-xl text-center w-full font-bold 
              border rounded-md duration-500 hover:shadow-2xl 
              hover:shadow-blue-400 hover:border hover:bg-blue-100 
              hover:text-black 
              text-white py-2 px-14
              "
          >
            Atualizar
          </button>
          <button
            disabled={show}
            onClick={() => {
              console.log("Deletar tema");
            }}
            className="text-xl text-center w-full font-bold 
              border border-transparent rounded-md duration-500 hover:shadow-2xl 
              hover:shadow-red-400 hover:border hover:bg-red-600 
              hover:text-black 
               text-white py-2 px-14
              "
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}
