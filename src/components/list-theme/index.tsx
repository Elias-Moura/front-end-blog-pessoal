import { ComponentType } from "react";

interface my_obj {
  id: number
}

interface Props<T> {
  items: my_obj[]
  researchedItems: my_obj[]
  WrappedComponent: ComponentType<{ key: number } & T>
}

export default function ListOfContent<T extends my_obj>({items,researchedItems, WrappedComponent}: Props<T>){
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
            return <WrappedComponent key={item.id} {...item as T} />;
          })
        : 
        items.map((item) => <WrappedComponent key={item.id} {...item as T} />)}
    </div>
  );
}
