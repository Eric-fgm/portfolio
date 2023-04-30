const SolidReset: React.FC<React.SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
      {...props}
    >
      <mask id="ipSReplayMusic0">
        <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="4">
          <path fill="#fff" d="M21 24v-6l5 3l5 3l-5 3l-5 3v-6Z" />
          <path
            strokeLinecap="round"
            d="M11.272 36.728A17.943 17.943 0 0 0 24 42c9.941 0 18-8.059 18-18S33.941 6 24 6c-4.97 0-9.47 2.015-12.728 5.272C9.614 12.93 6 17 6 17"
          />
          <path strokeLinecap="round" d="M6 9v8h8" />
        </g>
      </mask>
      <path
        fill="currentColor"
        d="M0 0h48v48H0z"
        mask="url(#ipSReplayMusic0)"
      />
    </svg>
  );
};

export default SolidReset;
