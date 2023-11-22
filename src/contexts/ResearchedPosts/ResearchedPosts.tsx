import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface ResearchedPostsContextType {
  researchedPosts: ListPostDTO[]
  setResearchedPosts: Dispatch<SetStateAction<ListPostDTO[]>>
}

interface TypeReactNode {
  children: ReactNode
}

export const ResearchedPostsContext = createContext({} as ResearchedPostsContextType);

export const ResearchedPostsProvider = ({children} : TypeReactNode ) => {
  const [researchedPosts, setResearchedPosts] = useState<ListPostDTO[]>([]);

  const contextValue: ResearchedPostsContextType = {
    researchedPosts,
    setResearchedPosts,
  };

  return (
    <ResearchedPostsContext.Provider value={contextValue}>
      {children}
    </ResearchedPostsContext.Provider>
  );
};