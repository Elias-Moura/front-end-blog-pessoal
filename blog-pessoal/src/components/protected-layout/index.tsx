import { useAuth } from "../../contexts/AuthProvider/useAuth"

export const ProtectedLayout = ({children}: {children: JSX.Element}) => {
  const auth = useAuth()

  if (!auth.email) {
    return <h1>Você não tem acesso</h1>
  }
  return children
}