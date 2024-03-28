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
      className={`relative flex h-8 w-8 flex-col items-center justify-center ${className}`}
      {...props}
    >
      <span
        className={`stick absolute left-[5px] top-[11px] h-[2px] w-[22px] bg-white ${
          isOpened ? "rotate-from" : ""
        }`}
      ></span>
      <span
        className={`stick absolute bottom-[11px] left-[5px] h-[2px] w-[22px] bg-white ${
          isOpened ? "rotate-to" : ""
        }`}
      ></span>
    </button>
  );
};

export default HamburgerMenu;
