import SearchBar from "../searchBar/SearchBar";
import BackBtn from "../BackBtn/BackBtn";

interface Props {
  show: boolean;
  setShow: (arg0: boolean) => void;
  btnCreateTitle: string;
  researchedItems: object[]
  setResearchedItems: (arg0:object[]) => void
  fetchItemByTitle: (active: boolean, title: string) => Promise<any>
}

export default function SearchAndCreate({
  show,
  setShow,
  btnCreateTitle,
  researchedItems,
  setResearchedItems,
  fetchItemByTitle
}: Props) {

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
        researchedItens={researchedItems}
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
