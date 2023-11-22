
interface Props {
  btnName: string;
  customClassName?: string;
  researchedItens: object[]
  setResearchedItens: (arg0: object[]) => void
}

export default function BackBtn({ researchedItens, setResearchedItens, btnName, customClassName = "" }: Props) {
  const defaultStyle =
    "border text-white p-4 rounded-md bg-black bg-opacity-40";

  if (researchedItens.length > 0) {
    return (
      <button
        className={customClassName || defaultStyle }
        onClick={() => {
          setResearchedItens([]);
        }}
      >
        {btnName}
      </button>
    );
  } else {
    return <></>;
  }
}
