import { ComponentType } from "react";

interface my_obj {
  id: number
}

interface Props {
  items: my_obj[]
  researchedItems: my_obj[]
  WrappedComponent: ComponentType
}

export default function ListOfContent({items,researchedItems, WrappedComponent}: Props){
  return (
    <div
      className="grid grid-cols-1
      lg:grid-cols-2 xl:grid-cols-4
      items-center justify-center gap-8"
    >
      {
        researchedItems.length > 0
        ? 
        researchedItems.map((item) => {
            return <WrappedComponent key={item.id} {...item} />;
          })
        : 
        items.map((item) => <WrappedComponent key={item.id} {...item} />)}
    </div>
  );
}
