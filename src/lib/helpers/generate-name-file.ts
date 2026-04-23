export const generateNameFile = (extension: string) => {
    return Math.round(Math.random() * 1000000) + "UACO." + extension
}
