import SearchBar from "../searchBar/SearchBar";
import BackBtn from "../BackBtn/BackBtn";
import { Dispatch, SetStateAction } from "react";



interface Props<T> {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  btnCreateTitle: string;
  researchedItems: T[]
  setResearchedItems: Dispatch<SetStateAction<T[]>>
  fetchItemByTitle: (active: boolean, title: string) => Promise<T | undefined>
}

export default function SearchAndCreate<T>({
  show,
  setShow,
  btnCreateTitle,
  researchedItems,
  setResearchedItems,
  fetchItemByTitle
}: Props<T>) {

  return (
    <div className="flex justify-center mb-10 gap-4">
      <button
        disabled={show}
        onClick={() => {
          setShow(true);
        }}
        className="
              p-2.5 border 
              text-white text-xl rounded-md
              hover:shadow-2xl 
              hover:bg-blue-400 dark:hover:bg-zinc-800
              duration-500"
      >
        {btnCreateTitle}
      </button>
      <SearchBar
        setResearchedItens={setResearchedItems} 
        fetchItemByTitle={fetchItemByTitle}      />
      <BackBtn
        btnName="Voltar"
        researchedItens={researchedItems}
        setResearchedItens={setResearchedItems}
      />
    </div>
  );
}
