import { Dispatch, SetStateAction } from "react";

interface Props<T> {
  btnName: string;
  customClassName?: string;
  researchedItens: T[]
  setResearchedItens: Dispatch<SetStateAction<T[]>>;
}

export default function BackBtn<T>({ researchedItens, setResearchedItens, btnName, customClassName = "" }: Props<T>) {
  const defaultStyle =
    "border text-white p-4 rounded-md bg-black bg-opacity-40";

  if (researchedItens instanceof Array && researchedItens.length > 0) {
    return (
      <button
        className={customClassName || defaultStyle }
        onClick={() => {
          setResearchedItens([] as T[]);
        }}
      >
        {btnName}
      </button>
    );
  } else {
    return <></>;
  }
}
