import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('pb_auth')
  const pathname = request.nextUrl.pathname

  const isLoginPage = pathname === '/login'

 
  if (!authCookie && !isLoginPage) {
    return NextResponse.redirect(
      new URL('/login', request.url)
    )
  }

  
  if (authCookie && isLoginPage) {
    return NextResponse.redirect(
      new URL('/dashboard', request.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
