export function Plus({fill, style}) {
  return (
    <svg
      width="50"
      height="50"
      version="1.1"
      viewBox="0 0 13.229 13.229"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "0.8rem",
        ...style
      }}
    >
      <g transform="translate(.64822 -75.221)" fill={fill} stroke={fill} strokeWidth="0.75px">
        <rect
          x="-.64822"
          y="81.042"
          width="13.229"
          height="1.5875"
          rx=".66145"
          ry=".66145"
        />
        <rect
          transform="rotate(90)"
          x="75.221"
          y="-6.76"
          width="13.229"
          height="1.5875"
          rx=".66145"
          ry=".66145"
        />
      </g>
    </svg>
  );
}
