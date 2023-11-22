import { Dispatch, SetStateAction, createContext, useState } from "react";

interface IThemeFormContext {
  show: boolean,
  setShow: Dispatch<SetStateAction<boolean>>;
}

export const ThemeFormContext = createContext<IThemeFormContext>({
  show: false, setShow: ()=>{}
});

export default function CreateThemeFormProvider( {children} : {children: JSX.Element}) {
  const [show, setShow] = useState(false)
  return (
    <ThemeFormContext.Provider value={{show,setShow}}>
      {children}
    </ThemeFormContext.Provider>
  )
}

