export default function LastSchemeArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className || ""}
      xmlns="http://www.w3.org/2000/svg"
      width="39"
      height="206"
      viewBox="0 0 39 206"
      fill="none"
    >
      <path
        d="M1 1L37 1"
        stroke="#0071CE"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M0.999983 199L37 199L37 1"
        stroke="#0071CE"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M7 205L1 199L7 193"
        stroke="#0071CE"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </svg>
  );
}
