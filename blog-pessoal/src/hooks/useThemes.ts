import { useState } from "react";

import Theme from "../models/Theme";
import { fetchThemes } from "../service/theme/themeAPI";


interface IPageInfo {
  page: number
  totalPages: number
  isFirstPage: boolean
  isLastPage: boolean

}

export default function useThemes(){
  const [themes, setThemes] = useState<Theme[]>([])
  const [pageInfo, setPageInfo] = useState<IPageInfo>()


  async function fetchData(size_=4, page_=0) {
    const response = await fetchThemes(true, size_, page_)
    setThemes(response.content)
    setPageInfo({
      page: response.number + 1,
      totalPages: response.totalPages, 
      isFirstPage: response.first, 
      isLastPage: response.last 
      }
    ) 
  }
  
  return {themes, pageInfo , fetchData}
}