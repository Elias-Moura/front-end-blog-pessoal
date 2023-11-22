import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { createTheme } from "../../service/theme/themeAPI";
import toastAlert from "../../utils/toastAlert";

interface CreateTheme {
  titulo: string;
  descricao: string;
}

interface Props {
  setOpen: (arg0: boolean) => void;
}

export default function CreateTheme({ setOpen }: Props) {
  const [theme, setTheme] = useState<CreateTheme>({
    titulo: "",
    descricao: "",
  });
  const msgValidateTitle = theme.titulo ? validate(theme.titulo) : [];
  const msgValidateDescr = theme.descricao ? validate(theme.descricao) : [];

  useEffect(() => {
    const card = document.getElementById("cardCreateTheme");
    card?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }, []);

  function isNumber(value: string) {
    return !isNaN(Number(value));
  }
  
  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
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
    console.log(theme);

    if (msgValidateTitle.length > 0 || msgValidateDescr.length > 0) {
      return;
    }

    setTheme({
      titulo: capitalize(theme.titulo),
      descricao: capitalize(theme.descricao),
    });

    const response = await createTheme(theme);

    console.log(response);

    setTheme({ titulo: "", descricao: "" });
    toastAlert("Tema criado com sucesso.", "sucess", 200);
    setOpen(false);
  }

  function refreshState(e: ChangeEvent<HTMLInputElement>) {
    setTheme({ ...theme, [e.target.name]: e.target.value });
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
            type="text"
            id="descricao"
            name="descricao"
            placeholder="descricao"
            className="peer placeholder-transparent 
                text-white bg-transparent border rounded-md p-1 px-4 
                focus:bg-none
                focus:outline-none
                resize-none
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
          {msgValidateDescr.map((rule, index) => (
            <p key={index} className="mb-2 text-xl text-red-500">
              {rule}
            </p>
          ))}
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
