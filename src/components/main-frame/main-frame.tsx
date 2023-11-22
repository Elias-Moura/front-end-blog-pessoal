import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export default function MainContent({children}:Props) {
  return (
    <div className="
    grow bg-gradient-to-r from-cyan-500 to-blue-500 
    dark:from-zinc-700 dark:to-zinc-800 
    flex justify-center p-10">
      {children}
    </div>
  )
}