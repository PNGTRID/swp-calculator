import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)',
          borderRadius: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            ₹
          </span>
          <svg
            width="80"
            height="30"
            viewBox="0 0 80 30"
            style={{ marginTop: '-10px' }}
          >
            <path
              d="M10 25 L25 15 L40 20 L70 5"
              stroke="white"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="70" cy="5" r="5" fill="white" />
          </svg>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
