import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { fetchThemes } from "../../service/theme/themeAPI";
import toastAlert from "../../utils/toastAlert";
import { createPost } from "../../service/posts/posts.API";
import { AxiosError } from "axios";

interface CreatePost {
  titulo: string;
  texto: string;
  data: string; //2023-11-21T02:39:53.814Z,
  temaId: number;
  usuarioId: number;
}

interface Props {
  setOpen: (arg0: boolean) => void;
}

export default function CreatePost({ setOpen }: Props) {
  const initialState = {
    titulo: "",
    texto: "",
    data: new Date().toISOString().slice(0, -1),
    temaId: 1,
    usuarioId: 1, //Todo: Criar hook para pegar dinamicamente
  };

  const [post, setPost] = useState<CreatePost>(initialState);
  const [themes, setThemes] = useState<ListPostDTO[]>([]);
  const msgValidateTitle = post.titulo ? validate(post.titulo) : [];
  const msgValidateDescr = post.texto ? validate(post.texto) : [];

  useEffect(() => {
    async function fecthDataThemes() {
      const response = await fetchThemes(true, 100);

      if (response instanceof AxiosError) {
        toastAlert("Erro ao buscar temas " + response, "error", 10000);
        setOpen(false);
        return;
      }
      console.log(response.content);
      setThemes(response.content);
    }
    fecthDataThemes();

    const card = document.getElementById("cardCreatepost");
    card?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }, []);

  function isNumber(value: string) {
    return !isNaN(Number(value));
  }



  function validate(value: string) {
    const msg = [];
    if (!value) {
      msg.push("O campo não pode ser vazio.");
    }
    if (value.length <= 3) {
      msg.push("O campo deve ser maior que 3 letras");
    }
    if (isNumber(value)) {
      msg.push("O campo não pode conter apenas numeros." + value);
    }
    return msg;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    if (msgValidateTitle.length > 0 || msgValidateDescr.length > 0) {
      return;
    }
        
    console.log(post);
    const response = await createPost(post);

    if(response instanceof AxiosError) {
      toastAlert("Erro ao criar post: " + response.response?.data, "error", 10000);
      setOpen(false);
      return;
    }

    console.log(typeof response);
    console.log(response);

    toastAlert("Post criado com sucesso.", "sucess", 2000);
    setOpen(false);
  }

  function refreshState(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {
    setPost({ ...post, [e.target.name]: e.target.value });
  }

  return (
    <div className="flex flex-col rounded-md text-white text-2xl">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex flex-col gap-4"
      >
        <div className="relative flex flex-col mt-6">
          <input
            required
            type="text"
            id="titulo"
            name="titulo"
            placeholder="titulo"
            className="peer placeholder-transparent 
                text-white bg-transparent border rounded-md p-1 px-4
                focus:bg-none
                focus:outline-none
                "
            value={post.titulo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              refreshState(e);
            }}
          />
          <label
            htmlFor="titulo"
            className="absolute -top-8 left-0 p-1 px-4
                transition-all
                peer-placeholder-shown:text-white
                peer-placeholder-shown:top-0
                peer-focus:-top-8
                peer-focus:text-md
                "
          >
            Título
          </label>
          {msgValidateTitle.map((rule, index) => (
            <p key={index} className="mb-2 text-xl text-red-500">
              {rule}
            </p>
          ))}
        </div>
        <div className="relative flex flex-col mt-4">
          <textarea
            rows={4}
            required
            id="texto"
            name="texto"
            placeholder="texto"
            className="peer placeholder-transparent 
                text-white bg-transparent border rounded-md p-1 px-4 
                focus:bg-none
                focus:outline-none
                resize-none
                "
            value={post.texto}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => refreshState(e)}
          />
          <label
            htmlFor="descricao"
            className="absolute -top-8 left-0 p-1 px-4
                transition-all
                peer-placeholder-shown:text-white
                peer-placeholder-shown:top-0
                peer-focus:-top-8
                peer-focus:text-md
                "
          >
            Texto
          </label>
          {msgValidateDescr.map((rule, index) => (
            <p key={index} className="mb-2 text-xl text-red-500">
              {rule}
            </p>
          ))}
        </div>
        <div className="relative flex flex-col mt-4">
          <select
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setPost({...post, [e.target.name] : e.target.value})
            }}
            required
            className="bg-transparent border rounded-md p-1 mt-2"
            name="temaId"
            id="themeSelect"
          >
            {themes?.map((theme) => (
              <option className="bg-zinc-600" key={theme.id} value={theme.id}>
                {theme.titulo}
              </option>
            ))}
          </select>
          <label
            htmlFor="descricao"
            className="absolute -top-8 left-0 p-1 px-4
                transition-all
                peer-placeholder-shown:text-white
                peer-placeholder-shown:top-0
                peer-focus:-top-8
                peer-focus:text-md
                "
          >
            Selecionar Tema
          </label>
        </div>
        <button
          type="submit"
          className="text-lg w-full text-center font-bold p-2 
            border rounded-md duration-500 hover:shadow-2xl 
            hover:shadow-blue-400 hover:border hover:bg-blue-100 hover:text-black 
            text-white py-2 px-12"
        >
          Cadastrar
        </button>
        <button
          onClick={() => {
            setOpen(false);
          }}
          className="text-lg w-full text-center font-bold p-2 
              border rounded-md duration-500 hover:shadow-2xl 
               hover:border hover:bg-red-600 
              text-white py-2 px-12"
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}
