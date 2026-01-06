export default function WaveLine() {
  return (
    <div className="relative w-full h-6">
      <svg
        width="100%"
        height="11"
        fill="none"
        className="stroke-foreground/20"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="wave_pattern"
          width="91"
          height="11"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0"
            strokeLinecap="square"
            transform="translate(0,1.5)"
          ></path>

          <animate
            attributeName="x"
            from="0"
            to="91"
            dur="4s"
            repeatCount="indefinite"
            begin="0s"
          ></animate>
        </pattern>

        <rect
          width="100%"
          height="100%"
          fill="url(#wave_pattern)"
          stroke="none"
        ></rect>
      </svg>
    </div>
  );
}
