export default function ListThemes({children,}: {children: JSX.Element[] | JSX.Element;}) {
  return <div className="grid grid-cols-1
  lg:grid-cols-2 xl:grid-cols-3
  items-center justify-center gap-8">{children}</div>;
}
