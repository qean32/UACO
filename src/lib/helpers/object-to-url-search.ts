export const objectToUrlSearch = (data: any) => {
    return Object.entries(data).reduce((prev, curr) => { return prev + `${curr[0]}=${curr[1]}&` }, "")
}
