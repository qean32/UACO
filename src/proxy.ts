import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const secret = process.env.NEXT_AUTH_SECRET
export default async function middleware(req: NextRequest) {
    const session = await getToken({ req: req, secret })
    const { pathname } = req.nextUrl
    const splitPath = pathname.split("/")

    if (!session) {
        return NextResponse.redirect(new URL('/auth', req.url))
    }

    if (splitPath.at(-1) == "admin") {
        if (session?.role != "ADMIN") {
            return NextResponse.redirect(new URL('/auth', req.url))
        }

        return NextResponse.next()
    }

    // @ts-ignore
    if (splitPath.at(-1) != session?.id) {
        return NextResponse.redirect(new URL('/', req.url))
    }

    return NextResponse.next()
}

export const config = { matcher: ['/estimation/:path*', '/profile/:path*', '/admin'] }
