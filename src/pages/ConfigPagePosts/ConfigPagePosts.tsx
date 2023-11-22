import SearchAndCreate from "../../components/SearchAndCreate/SearchAndCreate";
import Modal from "../../components/Modal/Modal";
import Pagination from "../../components/Pagination/Pagination";
import ListOfContent from "../../components/list-theme";
import { useEffect, useState } from "react";
import usePosts from "../../hooks/usePosts";
import { useResearchedPosts } from "../../contexts/ResearchedPosts/useResearchedPosts";
import PostCard from "../../components/PostCard/PostCard";
import { fetchPostByTitle } from "../../service/posts/posts.API";
import CreatePost from "../../components/CreatePost/CreatePost";

export default function ConfigPagePosts() {
  const { posts, pageInfo, fetchData } = usePosts();
  const [actualPage, setActualPage] = useState(0);
  const { researchedPosts, setResearchedPosts } = useResearchedPosts();
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetchData(4, actualPage);
  }, [actualPage]);

  return (
    <div className="flex flex-col justify-center ">
      <SearchAndCreate
        btnCreateTitle="Criar Post"
        show={show}
        setShow={setShow}
        researchedItems={researchedPosts}
        setResearchedItems={setResearchedPosts}
        fetchItemByTitle={fetchPostByTitle}
      />
      <Modal
        isOpen={show}
        title="Criar um novo post."
        description="Preencha os campos abaixo."
      >
        <CreatePost setOpen={setShow} />
      </Modal>
      <ListOfContent
        items={posts}
        researchedItems={researchedPosts}
        WrappedComponent={PostCard}
      />
      <Pagination
        setPage={setActualPage}
        pageInfo={pageInfo}
        actualPage={actualPage}
      />
    </div>
  );
}
