
import write from 'write-excel-file/node'
import { generateNameFile } from '..'

export const xlsx = async (data: string[][]) => {
    const name = generateNameFile("xlsx")
    await write(
        data, {
        filePath: process.env.NEXT_PRIVATE_PATH + name
    })

    return name
}
