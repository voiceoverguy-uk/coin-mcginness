import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const runtime = 'nodejs'
export const alt = 'Colin McGinness - Film & TV Composer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const imageBuffer = await readFile(join(process.cwd(), 'public/images/hero-bg.jpg'))
  const base64 = imageBuffer.toString('base64')
  const dataUrl = `data:image/jpeg;base64,${base64}`

  return new ImageResponse(
    (
      <div style={{ display: 'flex', width: '100%', height: '100%', position: 'relative', backgroundColor: '#0a0a0a' }}>
        <img
          src={dataUrl}
          width={1200}
          height={630}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.55) 100%)',
        }}>
          <div style={{ fontSize: 72, color: 'white', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Colin McGinness
          </div>
          <div style={{ fontSize: 22, color: '#aaaaaa', letterSpacing: '0.4em', marginTop: 16, textTransform: 'uppercase' as const }}>
            Composer
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
