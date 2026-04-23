import { Role, Sex } from '@prisma'

export const DEFAULT_TAKE = 40
export const PASSWORD_HASH_LENGTH = 6

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

export const toastConfig: {
} = {
    classNames: { description: "text-black", actionButton: "actionButton primary-bg" },
    position: "top-center",
}

export const guidePushStudents = '[\n {\n   firstName:    "Иван" \n   lastName:     "Иванов" \n   sureName:     "Иванович" \n   dateOfBirth:  "20.05.2006" \n   sex:          "MALE" / "FEMALE" \n   GroupCode:    "22ис-2" \n },\n ...\n]'
export const guidePushDepartments = '[\n {\n   code:      "09.02.07" \n   name:      "Информационные технологии и програмирование" \n },\n ...\n]'
export const guidePushGroups = '[\n {\n   code:             "22ис-2" \n   DepartmentCode:   "09.02.07"\n },\n ...\n]'

export const diagramConfig = {
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
    ],
    borderWidth: 1,
}
