import { ReactNode } from "react"

interface Props {
  isOpen: boolean
  description: string
  title: string
  children: ReactNode
}

export default function Modal({isOpen, description, title, children}: Props) {
  if (isOpen){
    return (
      <div className="bg-black fixed top-0 right-0 left-0 bottom-0 bg-opacity-70 ">
        <div className="fixed left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]
          bg-primary dark:bg-zinc-800 p-8 rounded-xl gap-2
          flex flex-col items-center shadow-2xl border"
          >
          <span className="text-3xl font-bold text-white pb-2">{title}</span>
          <p className="text-white text-xl text-center w-[90%]">{description}</p>
          {children}

        </div>
      </div>
    )
  }
  else {
    return <></>
  }
}
