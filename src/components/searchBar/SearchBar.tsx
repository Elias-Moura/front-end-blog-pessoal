import { FormEvent, useState } from 'react'
import toastAlert from '../../utils/toastAlert';

interface Props {
  researchedItens: object[]
  setResearchedItens: (arg0: object[]) => void
  fetchItemByTitle: (active: boolean, title: string) => Promise<object[]>
}


export default function SearchBar({ fetchItemByTitle, setResearchedItens}:Props) {
  const [search, setSearch] = useState("");


  async function handlePesquisa(
    e: FormEvent<HTMLFormElement> | undefined = undefined
  ) {
    if(e !== undefined){
      e.preventDefault();
    }

    if(search == "" || search == " "){
      setResearchedItens([]);
      return;
    }
    toastAlert("Pesquisando...", "info", 1000);

    const resposta = await fetchItemByTitle(true, search);
    console.log(resposta);
    if(resposta.length == 0){
      toastAlert("Nada encontrado.", "info", 2500);
    }
    setResearchedItens(resposta);
  }

  return (
    <div className="flex flex-col  items-center justify-center">
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        handlePesquisa(e);
      }}
    >
      <div className="flex">
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="p-2.5 w-full z-20 text-md text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600
             dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 focus:outline-none"
            placeholder="Pesquise um tema"
            required
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 text-2xl font-medium h-full text-white bg-primary rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-black dark:hover:bg-blue-900 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  </div>
  )
}
