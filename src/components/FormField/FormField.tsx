interface FormFieldProps extends React.HTMLAttributes<HTMLLabelElement> {
  name: string;
  children: React.ReactNode;
  atTop?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  name = "",
  className = "",
  atTop = false,
  children,
  ...props
}) => {
  return (
    <label
      className={`flex justify-between ${
        atTop ? "" : "items-center"
      } ${className}`}
      {...props}
    >
      <span className={`text-xs ${atTop ? "h-9 flex items-center" : ""}`}>
        {name}
      </span>
      <span className="w-36">{children}</span>
    </label>
  );
};

export default FormField;
