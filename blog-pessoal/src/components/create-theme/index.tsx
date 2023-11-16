import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useCreateThemeForm } from "../../contexts/create-theme-form/useCreateThemeForm";
import { createTheme } from "../../service/theme/themeAPI";

interface CreateTheme {
  titulo: string;
  descricao: string;
}

export default function CreateTheme() {
  const [theme, setTheme] = useState<CreateTheme>({ titulo: "", descricao: "" });
  const msgValidateTitle = theme.titulo ? validate(theme.titulo) : []
  const msgValidateDescr = theme.descricao ? validate(theme.descricao) : []


  useEffect(() => {
    const card = document.getElementById('cardCreateTheme')
    card?.scrollIntoView({
      behavior: 'smooth',
      block: 'center', 
      inline: 'center'  
    });

  }, [])

  function isNumber(value: string){
    return !isNaN(parseFloat(value))
  }

  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  function validate(value: string) {
    const msg = []
    if(!value) {
      msg.push("O campo não pode ser vazio.")
    }
    if(value.length <= 3) {
      msg.push("O campo deve ser maior que 3 letras")
    }
    if(isNumber(value)){
      msg.push("O campo não pode conter apenas numeros.")
    }
    return msg
  }

   async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(theme);

    if(msgValidateTitle.length > 0 || msgValidateDescr.length > 0) {
      return 
    }

    setTheme({titulo: capitalize(theme.titulo) , descricao: capitalize(theme.descricao)})


    const response = await createTheme(theme)

    console.log(response)


    setTheme({ titulo: "", descricao: "" });
    alert("Tema criado com sucesso.");
  }

  function refreshState(e: ChangeEvent<HTMLInputElement>) {
    setTheme({ ...theme, [e.target.name]: e.target.value });
  }

  const { setShow } = useCreateThemeForm();
  return (
    <div className="absolute backdrop-blur-sm  w-full h-full left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]
    ">
      <div id="cardCreateTheme" className="z-10 absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] ">
        <div className="flex flex-col bg-sky-900 dark:bg-zinc-800 shadow-2xl p-10 rounded-md text-white text-2xl">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            className="flex mt-10 mb-10 flex-col gap-4"
          >
            <p className="mb-8 text-3xl md:text-4xl lg:text-5xl text-center font-bold">Crie um tema</p>
            <div className="relative flex flex-col">
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
                value={theme.titulo}
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
                Título do tema
              </label>
              {
                msgValidateTitle.map(
                  (rule, index) => (<p key={index} className="mb-2 text-xl text-red-500">{rule}</p>)
                )
              }
            </div>
            <div className="relative flex flex-col mt-4">
              <input
                required
                type="text"
                id="descricao"
                name="descricao"
                placeholder="descricao"
                className="peer placeholder-transparent 
                text-white bg-transparent border rounded-md p-1 px-4 
                focus:bg-none
                focus:outline-none
                "
                value={theme.descricao}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  refreshState(e);
                }}
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
                Descrição do tema
              </label>
              {
                msgValidateDescr.map(
                  (rule, index) => (<p key={index} className="mb-2 text-xl text-red-500">{rule}</p>)                )
              }
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
                setShow(false);
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
      </div>
    </div>
  );
}
