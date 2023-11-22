import SearchAndCreate from "../../components/SearchAndCreate/SearchAndCreate";
import Modal from "../../components/Modal/Modal";
import CreateTheme from "../../components/create-theme";
import Pagination from "../../components/Pagination/Pagination";
import ListOfContent from "../../components/list-theme";
import useThemes from "../../hooks/useThemes";
import { useEffect, useState } from "react";
import { useResearchedThemes } from "../../contexts/ResearchedThemes/useResearchedThemes";
import { fetchThemesByName } from "../../service/theme/themeAPI";
import Theme from "../../components/theme/theme";

export default function ConfigPageTheme() {
  const { themes, pageInfo, fetchData } = useThemes();
  const [actualPage, setActualPage] = useState(0);
  const { researchedThemes, setResearchedThemes } = useResearchedThemes();
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetchData(4, actualPage);
  }, [actualPage]);

  return (
    <div className="flex flex-col justify-center ">
      <SearchAndCreate
        btnCreateTitle="Criar um novo tema"
        show={show}
        setShow={setShow}
        researchedItems={researchedThemes}
        setResearchedItems={setResearchedThemes}
        fetchItemByTitle={fetchThemesByName}
      />
      <Modal
        isOpen={show}
        title="Criar um novo tema."
        description="Preencha os campos abaixo."
      >
        <CreateTheme setOpen={setShow} />
      </Modal>
      <ListOfContent
        items={themes}
        researchedItems={researchedThemes}
        WrappedComponent={Theme}
      />
      <Pagination
        setPage={setActualPage}
        pageInfo={pageInfo}
        actualPage={actualPage}
      />
    </div>
  );
}
