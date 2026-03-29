import { Document, Packer, Paragraph, TextRun, } from "docx"
import { generateNameFile } from "..";
const fs = require('fs')

export const docx = (text: string) => {
    const name = generateNameFile('docx')
    const paragraphs = text.split("\n").map(line => new Paragraph({
        children: [new TextRun({ text: line, size: 24, font: 'Arial' })]
    }));

    const doc = new Document({ sections: [{ children: paragraphs }] })
    Packer.toBuffer(doc).then((buffer) => {
        fs.writeFileSync(process.env.NEXT_PRIVATE_PATH + name, buffer);
    })

    return name
}
