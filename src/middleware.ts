import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const secret = process.env.NEXT_AUTH_SECRET
export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl
    const session = await getToken({ req: req, secret })

    // console.log(pathname.split('/').at(-1), session?.id, pathname.split('/').at(-1) != session?.id)

    if (pathname.split('/').at(-1) != session?.id) {
        return NextResponse.redirect(new URL('/', req.url))
    }

    return NextResponse.next()
}

export const config = { matcher: ['/estimation/:path*', '/profile/:path*'] }