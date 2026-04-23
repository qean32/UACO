export const readJson = (file: any) => {
    const reader = new FileReader()

    return new Promise((resolve, reject) => {
        reader.readAsText(file)
        reader.onerror = () => reject()
        reader.onload = () => resolve(reader.result)
    })
}