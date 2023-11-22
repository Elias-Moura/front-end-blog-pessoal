import { ReactNode, createContext, useState } from "react";

interface ResearchedThemesContextType {
  researchedThemes: ThemeListDTO[]
  setResearchedThemes: (theme: ThemeListDTO[]) => void
}

interface TypeReactNode {
  children: ReactNode
}

export const ResearchedThemesContext = createContext({} as ResearchedThemesContextType);

export const ResearchedThemesProvider = ({children} : TypeReactNode ) => {
  const [researchedThemes, setResearchedThemes] = useState<ThemeListDTO[]>([]);

  const contextValue: ResearchedThemesContextType = {
    researchedThemes,
    setResearchedThemes,
  };

  return (
    <ResearchedThemesContext.Provider value={contextValue}>
      {children}
    </ResearchedThemesContext.Provider>
  );
};