interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <main
      className={`relative px-4 pt-18 pb-4 w-full h-full no-scrollbar overflow-auto lg:px-8 lg:pb-8 ${className}`}
      {...props}
    >
      <div className="mx-auto max-w-[1220px] page-animation">{children}</div>
    </main>
  );
};

export default Container;
