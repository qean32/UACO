import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(_: NextRequest, { params }: any) {
    const _params = await params

    const userIsAuthorized = true

    if (!userIsAuthorized) {
        return NextResponse.json({ message: 'Доступ запрещен' })
    }
    const filePath = path.join(process.cwd(), 'private', _params.file)

    if (!fs.existsSync(filePath)) {
        return NextResponse.json({ message: 'Файл не найден' })
    }
    // setHeader('Content-Type', 'application/octet-stream')

    const fileStream = fs.readFileSync(filePath)
    return NextResponse.json(fileStream)
}
