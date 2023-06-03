const SolidDijkstra: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
      <circle cx="4" cy="6" r="4" transform="rotate(-90 4 6)" fill="#889DC5" />
      <circle
        cx="20"
        cy="6"
        r="4"
        transform="rotate(-90 20 6)"
        fill="#889DC5"
      />
      <line
        x1="7"
        y1="6.25"
        x2="17"
        y2="6.25"
        stroke="#889DC5"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="19" r="4" fill="#889DC5" />
      <line
        x1="11.75"
        y1="6"
        x2="11.75"
        y2="16"
        stroke="#889DC5"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default SolidDijkstra;
