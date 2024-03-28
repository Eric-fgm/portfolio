import { limitValue } from "@/features/sortingAlgorithms/helpers";
import { useCallback } from "react";

type InputExtendedProps =
  | {
      type: "number";
      onChange?: (payload: number) => void;
    }
  | {
      type: "text";
      onChange?: (payload: string) => void;
    };

type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "onChange"
> &
  InputExtendedProps & {};

const Input: React.FC<InputProps> = ({
  type = "text",
  className = "",
  onChange = () => {},
  ...props
}) => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (type === "number")
        // @ts-ignore
        return onChange(limitValue(parseInt(event.target.value)));
      // @ts-ignore
      onChange(event.target.value);
    },
    [type, onChange],
  );

  return (
    <input
      type={type}
      className={`h-9 w-full rounded-lg bg-sortingpage px-3 text-sm outline-none placeholder:text-placeholder ${className}`}
      onChange={handleChange}
      {...props}
    />
  );
};

export default Input;
