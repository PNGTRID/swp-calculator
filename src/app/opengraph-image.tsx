import { ImageResponse } from 'next/og';

export const alt = 'SWP Calculator';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: 24,
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 30,
            }}
          >
            <span style={{ fontSize: 60, color: '#3B82F6', fontWeight: 'bold' }}>₹</span>
          </div>
          <h1
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              color: 'white',
              margin: 0,
            }}
          >
            SWP Calculator
          </h1>
        </div>
        <p
          style={{
            fontSize: 32,
            color: 'rgba(255, 255, 255, 0.9)',
            margin: 0,
            textAlign: 'center',
            maxWidth: 800,
          }}
        >
          Free online SWP calculator for mutual fund investors
        </p>
        <div
          style={{
            display: 'flex',
            marginTop: 60,
            gap: 30,
          }}
        >
          {['Calculate Withdrawals', 'Plan Retirement', 'Track Growth'].map((feature) => (
            <div
              key={feature}
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                padding: '16px 32px',
                borderRadius: 12,
                color: 'white',
                fontSize: 20,
              }}
            >
              {feature}
            </div>
          ))}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 30,
            fontSize: 20,
            color: 'rgba(255, 255, 255, 0.7)',
          }}
        >
          swpcalculator.online
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
