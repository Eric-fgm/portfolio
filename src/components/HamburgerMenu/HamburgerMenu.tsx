interface HamburgerMenuProps extends React.ComponentProps<"button"> {
  isOpened?: boolean;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isOpened = false,
  className = "",
  ...props
}) => {
  return (
    <button
      type="button"
      className={`relative flex flex-col items-center justify-center w-8 h-8 ${className}`}
      {...props}
    >
      <span
        className={`absolute stick top-[11px] left-[5px] w-[22px] h-[2px] bg-white ${
          isOpened ? "rotate-from" : ""
        }`}
      ></span>
      <span
        className={`absolute stick bottom-[11px] left-[5px] w-[22px] h-[2px] bg-white ${
          isOpened ? "rotate-to" : ""
        }`}
      ></span>
    </button>
  );
};

export default HamburgerMenu;
