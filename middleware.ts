import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const sessionCookie = request.cookies.get('admin_session')?.value;
    const validToken = process.env.ADMIN_SESSION_TOKEN;

    if (sessionCookie !== validToken) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/add-project'],
};