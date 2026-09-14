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
          background: '#0b100e',
          color: '#f1f3ed',
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
            border: '2px solid #35463d',
            borderRadius: '30px',
            padding: '48px',
            background: '#101713',
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
                  background: '#78c99b',
                  color: '#07110c',
                  fontSize: 20,
                  fontWeight: 700,
                }}
              >
                AH
              </div>
              <span style={{ fontSize: 24, fontWeight: 700 }}>Full Stack Developer</span>
            </div>
            <span style={{ fontSize: 20, color: '#aab5ae' }}>Amman, Jordan</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ color: '#78c99b', fontSize: 22, fontWeight: 700 }}>
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
            <div style={{ maxWidth: 920, color: '#aab5ae', fontSize: 31, lineHeight: 1.25 }}>
              Full-stack delivery, with backend depth.
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 21 }}>
            <div style={{ width: 10, height: 10, borderRadius: 999, background: '#91d5ad' }} />
            Aoun · Featured deployed full-stack project
          </div>
        </div>
      </div>
    ),
    size,
  );
}
