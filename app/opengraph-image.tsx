import { ImageResponse } from 'next/og';

export const alt = 'Adham Abu Hager — Full-Stack Developer';
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
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#07110f',
          color: '#f2f6ef',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, color: '#9cff57', fontSize: 24 }}>
          <div style={{ width: 16, height: 16, borderRadius: 999, background: '#9cff57' }} />
          FULL-STACK DEVELOPER · AMMAN, JORDAN
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div style={{ fontSize: 80, lineHeight: 1, letterSpacing: '-4px', fontWeight: 700 }}>Adham Abu Hager</div>
          <div style={{ maxWidth: 900, color: '#98a49d', fontSize: 30, lineHeight: 1.35 }}>
            Building complete web products—from clear interfaces to reliable backend systems.
          </div>
        </div>
        <div style={{ display: 'flex', gap: 24, color: '#d5ddd2', fontSize: 22 }}>
          <span>TypeScript</span><span>·</span><span>Node.js</span><span>·</span><span>Next.js</span><span>·</span><span>ASP.NET Core</span>
        </div>
      </div>
    ),
    size,
  );
}
