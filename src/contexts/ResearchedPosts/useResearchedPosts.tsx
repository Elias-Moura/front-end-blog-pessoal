import { useContext } from "react"
import { ResearchedPostsContext } from "./ResearchedPosts"


export const useResearchedPosts = () => {
  const context = useContext(ResearchedPostsContext)
  return context
}