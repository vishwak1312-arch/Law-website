import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0A192F 0%, #0F294A 100%)",
          borderRadius: "36px",
          border: "4px solid rgba(212, 175, 55, 0.4)",
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 186 426 L 326 426 L 306 401 L 206 401 Z" fill="#D4AF37" />
          <rect x="166" y="426" width="180" height="16" rx="6" fill="#D4AF37" />
          <rect x="246" y="126" width="20" height="275" rx="5" fill="#D4AF37" />
          <circle cx="256" cy="111" r="18" fill="#D4AF37" />
          <path d="M 86 171 C 176 151 336 151 426 171 L 426 186 C 336 166 176 166 86 186 Z" fill="#D4AF37" />
          <circle cx="91" cy="179" r="10" fill="#D4AF37" />
          <circle cx="421" cy="179" r="10" fill="#D4AF37" />
          <path d="M 91 186 L 41 301 M 91 186 L 141 301" stroke="#D4AF37" strokeWidth="6" strokeLinecap="round" />
          <path d="M 31 301 C 31 351 151 351 151 301 Z" fill="#D4AF37" />
          <path d="M 421 186 L 371 301 M 421 186 L 471 301" stroke="#D4AF37" strokeWidth="6" strokeLinecap="round" />
          <path d="M 361 301 C 361 351 481 351 481 301 Z" fill="#D4AF37" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
