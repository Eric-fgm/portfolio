interface FormFieldProps extends React.HTMLAttributes<HTMLLabelElement> {
  name: string;
  children: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({
  name = "",
  className = "",
  children,
  ...props
}) => {
  return (
    <label
      className={`flex items-center justify-between ${className}`}
      {...props}
    >
      <span className="text-xs">{name}</span>
      <span className="w-36">{children}</span>
    </label>
  );
};

export default FormField;
