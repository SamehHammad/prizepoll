import { NextResponse } from 'next/server';

export function middleware(request) {
  // Get the pathname of the request (e.g. /, /protected, /login)
  const path = request.nextUrl.pathname;

  // Define public paths that don't require authentication
  const isPublicPath = path === '/login' || path === '/register' || path === '/forgot-password';

  // Get the token from the cookies
  const token = request.cookies.get('authToken')?.value;

  // If the path is public and user is logged in, redirect to home page
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // If the path is protected and user is not logged in, redirect to login page
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Otherwise, continue with the request
  return NextResponse.next();
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    '/',
    '/login',
    '/register',
    '/forgot-password',
    '/profile',
    '/points',
    '/recharge',
    '/arrange',
    '/archive',
    '/billing',
    '/transactions',
    '/security',
    '/identification',
    '/notifications',
    '/invite-friends',
    '/tasks',
  ],
};
