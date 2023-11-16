import { useEffect, useState } from "react";
import ListThemes from "../../components/list-theme";
import { ProtectedLayout } from "../../components/protected-layout";
import Theme from "../../components/theme/theme";
import useThemes from "../../hooks/useThemes";
import CreateTheme from "../../components/create-theme";
import { useCreateThemeForm } from "../../contexts/create-theme-form/useCreateThemeForm";


export default function ThemesPage() {
  const { themes, pageInfo, fetchData } = useThemes();
  const [actualPage, setActualPage] = useState(0);
  const { show, setShow } = useCreateThemeForm();

  useEffect(() => {
    fetchData(3, actualPage);
  }, [actualPage]);

  function handlePagination(index: number) {
    setActualPage(index);
  }
  return (
    <ProtectedLayout>
      <div className="flex flex-col justify-center relative ">
        <div className="flex justify-center mb-10">
          <button
            disabled={show}
            onClick={() => {
              setShow(true);
            }}
            className="
              p-4 border 
              text-white text-2xl rounded-md
              hover:shadow-2xl 
              hover:bg-blue-400 dark:hover:bg-zinc-800
              duration-500"
          >
            Criar um novo tema
          </button>
        </div>
        {show && <CreateTheme />}
        <ListThemes>
          {themes.map((theme) => (
            <Theme
              key={theme.id}
              name={theme.titulo}
              description={theme.descricao}
            />
          ))}
        </ListThemes>
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
      </div>
    </ProtectedLayout>
  );
}
