import { ResearchedPostsProvider } from "../../contexts/ResearchedPosts/ResearchedPosts";
import ConfigPagePosts from "../ConfigPagePosts/ConfigPagePosts";

export default function PostsPage() {
  return (
    <ResearchedPostsProvider>
      <ConfigPagePosts/>
    </ResearchedPostsProvider>
  );
}
