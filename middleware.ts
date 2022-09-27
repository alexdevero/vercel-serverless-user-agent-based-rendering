import { NextRequest, NextResponse, userAgent } from 'next/server'

export const config = {
  matcher: '/',
}

export function middleware(req: NextRequest) {
  const { device } = userAgent(req)

  console.log('device: ', device)

  const viewport = device.type === 'mobile' ? 'mobile' : 'desktop'

  req.nextUrl.pathname = `_viewport/${viewport}`

  return NextResponse.rewrite(req.nextUrl)
}
