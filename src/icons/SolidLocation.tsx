const SolidLocation: React.FC<React.SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 12 12"
      {...props}
    >
      <path
        fill="currentColor"
        d="M6 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm-.5-5.97V.5a.5.5 0 0 1 1 0v1.53A4.002 4.002 0 0 1 9.969 5.5H11.5a.5.5 0 0 1 0 1H9.969a4.002 4.002 0 0 1-3.47 3.47L6.5 10v1.5a.5.5 0 0 1-1 0V9.97A4.002 4.002 0 0 1 2.03 6.5a.5.5 0 0 1-.03 0H.5a.5.5 0 0 1 0-1H2a.5.5 0 0 1 .03 0A4.002 4.002 0 0 1 5.5 2.032ZM3 6a3 3 0 1 0 6 0a3 3 0 0 0-6 0Z"
      />
    </svg>
  );
};

export default SolidLocation;
