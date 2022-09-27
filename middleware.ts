import { NextRequest, NextResponse, userAgent } from 'next/server'

export const config = {
  matcher: '/',
}

export default function middleware(req: NextRequest) {
  const { device } = userAgent(req)

  console.log('device: ', device)
  console.log('req: ', req)
  console.log('user-agent: ', req.headers.get('user-agent'))

  const deviceType = device.type === 'desktop' ? 'desktop' : 'mobile'

  req.nextUrl.pathname = `_viewport/${deviceType}`

  return NextResponse.rewrite(req.nextUrl)
}
