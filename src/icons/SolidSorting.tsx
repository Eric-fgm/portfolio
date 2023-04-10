const SolidSortingIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M8 18H4C3.71667 18 3.479 17.904 3.287 17.712C3.095 17.52 2.99934 17.2827 3 17C3 16.7167 3.096 16.479 3.288 16.287C3.48 16.095 3.71734 15.9993 4 16H8C8.28334 16 8.521 16.096 8.713 16.288C8.905 16.48 9.00067 16.7173 9 17C9 17.2833 8.904 17.521 8.712 17.713C8.52 17.905 8.28267 18.0007 8 18ZM20 8H4C3.71667 8 3.479 7.904 3.287 7.712C3.095 7.52 2.99934 7.28267 3 7C3 6.71667 3.096 6.479 3.288 6.287C3.48 6.095 3.71734 5.99934 4 6H20C20.2833 6 20.521 6.096 20.713 6.288C20.905 6.48 21.0007 6.71734 21 7C21 7.28334 20.904 7.521 20.712 7.713C20.52 7.905 20.2827 8.00067 20 8ZM14 13H4C3.71667 13 3.479 12.904 3.287 12.712C3.095 12.52 2.99934 12.2827 3 12C3 11.7167 3.096 11.479 3.288 11.287C3.48 11.095 3.71734 10.9993 4 11H14C14.2833 11 14.521 11.096 14.713 11.288C14.905 11.48 15.0007 11.7173 15 12C15 12.2833 14.904 12.521 14.712 12.713C14.52 12.905 14.2827 13.0007 14 13Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SolidSortingIcon;
