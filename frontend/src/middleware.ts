import { getToken } from 'next-auth/jwt';
import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const ROUTES = {
  ADD_ORG: '/login/add-organization',
  SELECT_ORG: '/login/select-organization',
  STORE: '/login/add-store',
  DASHBOARD: '/dashboard',
  SIGN_IN: '/sign-in',
};

const isProtectedRoute = (path: string) => path === '/' || path.startsWith(ROUTES.DASHBOARD);

const isAddOrgRoute = (path: string) => path.startsWith(ROUTES.ADD_ORG);

const isSelectOrgRoute = (path: string) => path.startsWith(ROUTES.SELECT_ORG);

const redirect = (url: string, request: NextRequest) => {
  const origin = request.nextUrl.origin;
  return NextResponse.redirect(origin + url);
};

const shouldRedirectToAddOrg = (pathname: string) =>
  ![ROUTES.ADD_ORG, ROUTES.STORE, ROUTES.SELECT_ORG].includes(pathname);

// const shouldRedirectToSelectOrg = (pathname: string) =>
//   pathname !== ROUTES.SELECT_ORG &&
//   [ROUTES.ADD_ORG, ROUTES.STORE].includes(pathname);

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const cookieStore = await cookies();
  const has_organization = cookieStore.get('has_organization')?.value;
  const token = await getToken({ req: request });

  // Redirect ke add organization jika token tidak ada dan route bukan add/select org
  if (token && pathname === ROUTES.SIGN_IN) {
    return redirect(ROUTES.DASHBOARD, request);
  }

  // Redirect ke dashboard jika token ada tapi belum ada organization
  if (
    token &&
    typeof has_organization === 'undefined' &&
    (pathname === ROUTES.ADD_ORG || pathname === ROUTES.SELECT_ORG) &&
    pathname !== ROUTES.DASHBOARD
  ) {
    return redirect(ROUTES.DASHBOARD, request);
  }

  // Logic redirect berdasarkan organization
  if (has_organization) {
    if (has_organization === '0') {
      if (shouldRedirectToAddOrg(pathname)) {
        return redirect(ROUTES.ADD_ORG, request);
      }
      // if (shouldRedirectToSelectOrg(pathname)) {
      //   return redirect(ROUTES.SELECT_ORG, request);
      // }
    } else if (has_organization === '1') {
      if (pathname !== ROUTES.SELECT_ORG) {
        return redirect(ROUTES.SELECT_ORG, request);
      }
    } else {
      if (pathname !== ROUTES.DASHBOARD) {
        return redirect(ROUTES.DASHBOARD, request);
      }
    }
  }

  // Redirect ke sign-in jika route protected dan tidak ada token
  if (isProtectedRoute(pathname) && !token) {
    const signInUrl = new URL(ROUTES.SIGN_IN, request.url);
    signInUrl.searchParams.set('callbackUrl', encodeURI(request.url));
    return NextResponse.redirect(signInUrl);
  }

  // Redirect ke sign-in jika tidak ada token dan organization di route add/select org
  if (
    !token &&
    typeof has_organization === 'undefined' &&
    (isAddOrgRoute(pathname) || isSelectOrgRoute(pathname))
  ) {
    return redirect(ROUTES.SIGN_IN, request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next|_vercel|monitoring|api/auth|.*\\..*).*)',
};
