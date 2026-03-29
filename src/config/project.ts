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

export const toastConfig: {
} = {
    classNames: { description: "text-black", actionButton: "actionButton primary-bg" },
    position: "top-center",
    // action: {
    //     label: "Готово",
    //     onClick: () => console.log("Undo"),
    // },
}

export const guidePushStudents = '[\n {\n   firstName:    "Иван" \n   lastName:     "Иванов" \n   sureName:     "Иванович" \n   dateOfBirth:  "20.05.2006" \n   sex:          "MALE" / "FEMALE" \n   GroupCode:    "22ис-2" \n },\n ...\n]'
export const guidePushDepartments = '[\n {\n   code:      "09.02.07" \n   name:      "Информационные технологии и програмирование" \n },\n ...\n]'
export const guidePushGroups = '[\n {\n   code:             "22ис-2" \n   DepartmentCode:   "09.02.07"\n },\n ...\n]'
