import { NextRequest, NextResponse, userAgent } from 'next/server'

export const config = {
  matcher: '/',
}

export default function middleware(req: NextRequest) {
  const { device } = userAgent(req)

  const deviceType = device.type === 'desktop' ? 'desktop' : 'mobile'

  req.nextUrl.pathname = `_viewport/${deviceType}`

  return NextResponse.rewrite(req.nextUrl)
}
