const SolidMerge: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        d="M5.7 20.3q-.275-.275-.275-.7t.275-.7l4.125-4.15q.575-.575.875-1.3t.3-1.525v-5.1l-.9.9Q9.825 8 9.412 8T8.7 7.7q-.275-.275-.275-.7t.275-.7l2.6-2.6q.15-.15.325-.213T12 3.425q.2 0 .375.063t.325.212l2.6 2.6q.275.275.287.688T15.3 7.7q-.275.275-.7.275t-.7-.275l-.9-.875v5.1q0 .8.3 1.525t.875 1.3L18.3 18.9q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275L12 15.4l-4.9 4.9q-.275.275-.687.288T5.7 20.3Z"
      />
    </svg>
  );
};

export default SolidMerge;
