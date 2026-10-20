import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const { email, password } = await request.json();

    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
    const SESSION_TOKEN = process.env.ADMIN_SESSION_TOKEN;

    if (!ADMIN_EMAIL || !ADMIN_PASSWORD || !SESSION_TOKEN) {
        return NextResponse.json(
            { success: false, message: 'Server not configured' },
            { status: 500 }
        );
    }

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        const response = NextResponse.json({ success: true });
        response.cookies.set('admin_session', SESSION_TOKEN, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24 * 7, // 7 days
        });
        return response;
    }

    return NextResponse.json(
        { success: false, message: 'Invalid email or password' },
        { status: 401 }
    );
}