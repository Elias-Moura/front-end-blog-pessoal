import { useState } from "react";

import { fetchPosts } from "../service/posts/posts.API";


interface IPageInfo {
  page: number
  totalPages: number
  isFirstPage: boolean
  isLastPage: boolean

}

export default function usePosts(){
  const [posts, setPosts] = useState<ListPostDTO[]>([])
  const [pageInfo, setPageInfo] = useState<IPageInfo>()


  async function fetchData(size_=4, page_=0) {
    const response = await fetchPosts(true, size_, page_)
    setPosts(response.content)
    setPageInfo({
      page: response.number + 1,
      totalPages: response.totalPages, 
      isFirstPage: response.first, 
      isLastPage: response.last 
      }
    ) 
  }
  
  return {posts, pageInfo , fetchData}
}