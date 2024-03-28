const SolidAStar: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        cx="17.3224"
        cy="18.1499"
        r="4"
        transform="rotate(-65 17.3224 18.1499)"
        fill="currentColor"
      />
      <line
        x1="5.43476"
        y1="12.8825"
        x2="14.4978"
        y2="17.1087"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="5" cy="11.2812" r="4" fill="currentColor" />
      <circle
        cx="18.2515"
        cy="5.3157"
        r="4"
        transform="rotate(-115 18.2515 5.3157)"
        fill="currentColor"
      />
      <line
        x1="6.57525"
        y1="11.0363"
        x2="15.6383"
        y2="6.81014"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default SolidAStar;
