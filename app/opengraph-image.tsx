import { ImageResponse } from 'next/og';

export const alt = 'Adham Abu Hager — Full Stack Developer portfolio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#f3f1ea',
          color: '#172033',
          padding: '56px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '2px solid #d8d4ca',
            borderRadius: '30px',
            padding: '48px',
            background: '#fffdf8',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div
                style={{
                  width: 54,
                  height: 54,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 16,
                  background: '#2457d6',
                  color: '#ffffff',
                  fontSize: 20,
                  fontWeight: 700,
                }}
              >
                AH
              </div>
              <span style={{ fontSize: 24, fontWeight: 700 }}>Full Stack Developer</span>
            </div>
            <span style={{ fontSize: 20, color: '#657083' }}>Amman, Jordan</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ color: '#2457d6', fontSize: 22, fontWeight: 700 }}>
              TYPESCRIPT · NODE.JS · NEXT.JS · ASP.NET CORE
            </div>
            <div
              style={{
                maxWidth: 940,
                fontSize: 78,
                lineHeight: 1,
                letterSpacing: '-4px',
                fontWeight: 750,
              }}
            >
              Adham Abu Hager
            </div>
            <div style={{ maxWidth: 920, color: '#5c6678', fontSize: 31, lineHeight: 1.25 }}>
              Full-stack delivery, with backend depth.
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 21 }}>
            <div style={{ width: 10, height: 10, borderRadius: 999, background: '#0b7c6b' }} />
            Aoun · Featured deployed full-stack project
          </div>
        </div>
      </div>
    ),
    size,
  );
}
