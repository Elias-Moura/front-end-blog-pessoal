import { ReactNode, createContext } from "react";
import usePersistedState from "../utils/usePersistedState";

interface UserThemeType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<UserThemeType>({
  theme: '',
  setTheme: () => {}
});

interface Props {
  children: ReactNode;
}

export default function ThemeProvider({children}: Props) {
  const [theme, setTheme] = usePersistedState('theme', 'light');
  
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}