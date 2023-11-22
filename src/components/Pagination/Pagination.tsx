
type Props = {
  setPage: (arg0: number) => void
  pageInfo: any
  actualPage: number
};

export default function Pagination({setPage, pageInfo, actualPage}: Props) {

  function handlePagination(index: number) {
    setPage(index);
  }
  return (
    <div className="flex justify-center items-center mt-10 gap-4">
      {Array(pageInfo?.totalPages)
        .fill("")
        .map((_, index) => {
          return (
            <button
              className={`p-4 border 
                  text-white text-2xl rounded-md
                  hover:shadow-2xl   
                hover:bg-blue-600 dark:hover:bg-zinc-800
                  duration-500
                 ${actualPage === index && "bg-primary"}
                 `}
              key={index}
              onClick={() => handlePagination(index)}
            >
              {index + 1}
            </button>
          );
        })}
    </div>
  );
}
