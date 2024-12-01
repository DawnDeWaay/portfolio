const WavyLine = () => (
  <div style={{ width: "100%", overflow: "hidden" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="20"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id="wavyPattern"
          patternUnits="userSpaceOnUse"
          width="20"
          height="20"
        >
          <path
            d="M0 10 Q 5 5, 10 10 T 20 10"
            fill="none"
            stroke="black"
            strokeWidth="2"
            stroke-linecap="square"
          />
        </pattern>
      </defs>
      <rect width="100%" height="20" fill="url(#wavyPattern)" />
    </svg>
  </div>
);

export default WavyLine;
