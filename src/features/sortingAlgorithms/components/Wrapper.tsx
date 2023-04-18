interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({
  title,
  children,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`p-4 bg-sortingpage-secondary rounded-2xl ${className}`}
      {...props}
    >
      {title ? (
        <>
          <h5 className="mb-2 text-xs font-medium">{title}</h5>
          {children}
        </>
      ) : (
        children
      )}
    </div>
  );
};

export default Wrapper;
