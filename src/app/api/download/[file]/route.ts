import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(_: NextRequest, { params }: { params: Promise<{ file: string }> }) {
    const { file } = await params
    const userIsAuthorized = true

    if (!userIsAuthorized) {
        return NextResponse.json({ message: 'Доступ запрещен' })
    }
    const filePath = path.join(process.cwd(), 'private', file)

    if (!fs.existsSync(filePath)) {
        return NextResponse.json({ message: 'Файл не найден' })
    }
    const fileBuffer = fs.readFileSync(filePath)

    return new Response(fileBuffer, {
        status: 200,
        headers: {
            'Content-Type': 'application/octet-stream',
            'Content-Disposition': `attachment; filename="${path.basename(filePath)}"`,
            'Content-Length': fileBuffer.length.toString(),
        },
    })
}
