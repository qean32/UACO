import { Role, Sex } from '@prisma'

export enum Color {
    "primary" = "#208800",
    "primary-dark" = "",
    "dark" = "rgb(19, 19, 19)",
}

export const convertRu: Record<Role | Sex, string> = {
    "STUDENT": "Студент",
    "SUPERVISOR": "Организатор",
    "ADMIN": "Администратор",
    "FEMALE": "Ж",
    "MALE": "М"
}

export const RTKQKEY = {
    getDepartments: "getDepartments",
    getSupervisors: "getSupervisors",
    bestSupervisors: "bestSupervisors",
    getGroups: "getGroups",
    bestGroups: "bestGroups",
}

export const toastConfig = {
    classNames: { description: "text-black", actionButton: "actionButton" },
    action: {
        label: "Готово",
        onClick: () => console.log("Undo"),
    },
}
