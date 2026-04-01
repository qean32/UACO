export const openDownloadFile = (path: string) => {
    window.open("api/download/" + path)?.focus()
}
