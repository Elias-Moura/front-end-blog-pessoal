import { useEffect, useState } from "react";
import { useCreateThemeForm } from "../../contexts/create-theme-form/useCreateThemeForm";
import {
  deleteTheme,
  fetchThemesById,
  fetchThemesByName,
  updateTheme,
} from "../../service/theme/themeAPI";
import { useParams } from "react-router-dom";

interface Props {
  id: number;
  titulo: string;
  descricao: string;
}

export default function Theme({ id, titulo, descricao }: Props) {
  const { show } = useCreateThemeForm();
  const [tema, setTema] = useState<Props>({ id, titulo, descricao });
  const [deleted, setDeleted] = useState(false);
  const [edited, setEdited] = useState(false);
  const {id_} = useParams() 

  useEffect(()=>{
    async function fetchById(id:string) {
      const response = await fetchThemesById(true, id) 
      setTema({...response})      
    }

    if(id_){
      console.log(id_)
      fetchById(id_)
    }
  }, [])

  async function handleEdit() {
    console.log(tema);
    setEdited(!edited);
    const response = await updateTheme(tema);
    console.log("Response: ", response);
  }

  async function handleDelete() {
    const deleteMe = confirm("Você realmente quer deletar?");
    if (deleteMe) {
      await deleteTheme(tema.id);
      setDeleted(true);
    }
  }

  function refreshState(e: ChangeEvent<HTMLInputElement>) {
    setTema({ ...tema, [e.target.name]: e.target.value });
  }

  return (
    <div
      className={`
      flex flex-col
      dark:bg-zinc-600
      rounded-xl mx-[2rem] p-4
      text-white bg-primary
      shadow-2xl
      w-[60%]
      lg:w-[80%] lg:max-w-[370px]
      xl:w-[85%] xl:max-w-[370px]
      justify-self-center
      hover:scale-105 duration-300
      ${deleted && "hidden"}
      `}
    >
      <textarea
        name="titulo"
        className={`bg-transparent grow text-3xl md:text-4xl font-bold w-full
            focus:outline-none focus:ring-0 resize-none h-[100%]
            ${edited && "bg-green-600 border-2 rounded-md"}
            `}
        rows={2}
        readOnly={!edited}
        value={tema.titulo}
        onChange={(e: ChangeEvent<HTMLInputElement>) => refreshState(e)}
      />
      <textarea
        name="descricao"
        className={`
            bg-transparent text-xl w-full h-[100%] mt-4
            focus:outline-none focus:ring-0 resize-none
            ${edited && "bg-green-600 border-2 rounded-md"}
            `}
        readOnly={!edited}
        rows={4}
        value={tema.descricao}
        onChange={(e: ChangeEvent<HTMLInputElement>) => refreshState(e)}
      />
      <div className="flex flex-col gap-2">
      <button
        disabled={show}
        onClick={ () => {edited ? handleEdit() : setEdited(!edited)}}
        className="text-xl text-center w-full font-bold 
              border rounded-md duration-500 hover:shadow-2xl 
              hover:shadow-blue-400 hover:border hover:bg-blue-100 
              hover:text-black 
              text-white py-2 px-14              
              "
      >
        {edited ? "Salvar" : "Editar"}
      </button>
      <button
        disabled={show}
        onClick={() => {edited ? setEdited(!edited) : handleDelete()}}
        className="text-xl text-center w-full font-bold 
              border rounded-md duration-500 hover:shadow-2xl 
              hover:shadow-red-400 hover:border hover:bg-red-600 
              hover:text-black 
               text-white py-2 px-14
              "
      >
        {edited ? "Cancelar" : "Excluir"}
      </button>
      </div>
    </div>
  );
}
