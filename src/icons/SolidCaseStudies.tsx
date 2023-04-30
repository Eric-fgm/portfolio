const SolidCaseStudies: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
      <g fill="currentColor">
        <path d="M2.162 8.5C2 9.603 2 11.05 2 13c0 3.771 0 5.657 1.172 6.828C4.343 21 6.229 21 10 21h4c3.771 0 5.657 0 6.828-1.172C22 18.657 22 16.771 22 13c0-1.95 0-3.396-.162-4.5c-2.277 1.48-3.736 2.424-5.088 3.005V12a.75.75 0 0 1-1.5.017a12.75 12.75 0 0 1-6.5 0A.75.75 0 0 1 7.25 12v-.495C5.898 10.923 4.44 9.98 2.162 8.5Z" />
        <path
          fillRule="evenodd"
          d="M10.581 2.25h-.02c-.114 0-.202 0-.286.005a2.75 2.75 0 0 0-2.385 1.72a7.913 7.913 0 0 0-.12.343l-.004.012a1.63 1.63 0 0 1-.504.695c-.228.008-.445.017-.653.03c-1.644.096-2.687.366-3.437 1.117a3 3 0 0 0-.592.838c.058.02.114.046.167.081c2.1 1.365 3.42 2.22 4.517 2.767A.75.75 0 0 1 8.75 10v.458c2.12.64 4.38.64 6.5 0V10a.75.75 0 0 1 1.487-.142c1.096-.548 2.416-1.402 4.516-2.767a.753.753 0 0 1 .167-.081a3.024 3.024 0 0 0-.592-.838c-.75-.75-1.793-1.02-3.437-1.118c-.197-.011-.403-.02-.618-.028a1.881 1.881 0 0 1-.565-.774l-.003-.009c-.036-.107-.063-.191-.095-.269a2.75 2.75 0 0 0-2.385-1.719a4.82 4.82 0 0 0-.285-.005h-2.86Zm4.237 2.566l-.005-.011l-.005-.012l-.004-.012l-.004-.01l-.002-.005l-.004-.012l-.004-.012l-.002-.006l-.003-.008l-.002-.007l-.002-.006a3.544 3.544 0 0 0-.063-.181a1.25 1.25 0 0 0-1.084-.782a4.191 4.191 0 0 0-.215-.002h-2.838c-.143 0-.183 0-.215.002a1.25 1.25 0 0 0-1.084.782l-.003.007l-.008.021a5.709 5.709 0 0 0-.077.23l-.002.006l-.003.007l-.002.008l-.002.006l-.004.012l-.004.012l-.002.005l-.004.01l-.004.012l-.005.012l-.004.01l-.001.001a2.859 2.859 0 0 1-.044.108L10 5h4.896a3.024 3.024 0 0 1-.078-.184Z"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
};

export default SolidCaseStudies;