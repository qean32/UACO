import { Role } from '@prisma'

export enum Color {
    "primary" = "#208800",
    "primary-dark" = "",
    "dark" = "rgb(19, 19, 19)",
}

export const convertRu: Record<Role, string> = {
    "STUDENT": "Студент",
    "SUPERVISOR": "Организатор"
}

export const RTKQKEY = {
    getDepartments: "getDepartments",
    getSupervisors: "getSupervisors",
    getGroups: "getGroups",
}