const SolidBubble: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
      {...props}
    >
      <path
        fill="currentColor"
        d="M7 18q-1.65 0-2.825-1.175T3 14q0-1.65 1.175-2.825T7 10q1.65 0 2.825 1.175T11 14q0 1.65-1.175 2.825T7 18Zm9.5-4q-2.3 0-3.9-1.6T11 8.5q0-2.3 1.6-3.9T16.5 3q2.3 0 3.9 1.6T22 8.5q0 2.3-1.6 3.9T16.5 14Zm-2 7q-1.25 0-2.125-.875T11.5 18q0-1.25.875-2.125T14.5 15q1.25 0 2.125.875T17.5 18q0 1.25-.875 2.125T14.5 21Z"
      />
    </svg>
  );
};

export default SolidBubble;
