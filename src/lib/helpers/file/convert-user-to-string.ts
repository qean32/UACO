export const convertUserToString = (users: any[]) => {
    return users.reduce((prev, curr) => {
        return prev + `${curr.firstName} ${curr.lastName} ${curr.sureName}\n${curr.password} ${curr.email}\n- - -\n`
    }, "")
}
