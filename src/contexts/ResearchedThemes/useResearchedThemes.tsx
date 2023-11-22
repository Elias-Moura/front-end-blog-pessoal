import { useContext } from "react"
import { ResearchedThemesContext } from "./ResearchedThemes"


export const useResearchedThemes = () => {
  const context = useContext(ResearchedThemesContext)
  return context
}