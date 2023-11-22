import { useEffect, useState } from "react";

export default function usePersistedState(key: string, initialState: any) {
  const [state, setState] = useState(
    () => {
      const storageValue = localStorage.getItem(key);

      try{
        if (storageValue) {
          return JSON.parse(storageValue)
        }

      } catch (error) {
        if(error instanceof SyntaxError){
          console.info('Não foi possível recuperar sua definição de tema. (Parse JSON error capturado)')
        } else {
          throw error
        }
      }

      return initialState;
    }
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])
  
  return [state, setState];
}