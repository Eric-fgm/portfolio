const SolidBFS: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
      <circle
        cx="20"
        cy="4"
        r="4"
        transform="rotate(-90 20 4)"
        fill="currentColor"
      />
      <line
        x1="7"
        y1="4.25"
        x2="17"
        y2="4.25"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="4" cy="4" r="4" fill="currentColor" />
      <circle cx="4" cy="20" r="4" fill="currentColor" />
      <line
        x1="3.75"
        y1="7"
        x2="3.75"
        y2="17"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default SolidBFS;
