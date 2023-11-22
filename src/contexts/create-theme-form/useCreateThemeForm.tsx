import { useContext } from "react"
import { ThemeFormContext } from "./themeFormContext"

export const useCreateThemeForm = () => {
  const context = useContext(ThemeFormContext)
  return context
}
