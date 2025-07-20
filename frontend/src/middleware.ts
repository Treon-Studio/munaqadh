import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = await getToken({ req: request });

  // Role-based redirect after login
  if (token && pathname === '/sign-in') {
    if (token.role === 'admin') {
      return NextResponse.redirect(new URL('/d', request.url));
    }
    if (token.role === 'user') {
      return NextResponse.redirect(new URL('/u', request.url));
    }
    // fallback
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|_vercel|monitoring|api/auth|.*\\..*).*)'],
};
