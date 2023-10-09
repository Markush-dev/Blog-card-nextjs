export default function NextArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className || ""}
      xmlns="http://www.w3.org/2000/svg"
      width="75"
      height="14"
      viewBox="0 0 75 14"
      fill="none"
    >
      <path
        d="M67.5 13L73.5 7L67.5 1"
        stroke="#0071CE"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M1.5 7L73.5 7.00001"
        stroke="#0071CE"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
