import { useCreateThemeForm } from "../../contexts/create-theme-form/useCreateThemeForm"

interface Props {
  name: string
  description: string
}

export default function Theme({name, description}: Props) {
  const {show} = useCreateThemeForm()
  return (
<div
      className="
        dark:bg-zinc-600
        rounded-xl my-auto mx-[2rem] px-8
        flex justify-around text-white bg-primary
        shadow-2xl
        w-[60%]
        lg:w-[80%] lg:max-w-[370px]
        xl:w-[85%] xl:max-w-[370px]
        justify-self-center
        "
    >
      <div className="flex flex-col content-around justify-center min-h-[450px] w-[90%] gap-[4rem]">
        <div className="flex flex-col items-center h-[30%]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {name}
          </h2>
          <p className="text-xl wrap">{description}</p>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <button
            disabled={show}
            onClick={() => {console.log('Atualizar tema')}}
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
            onClick={() => {console.log('Deletar tema')}}
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
  )
}