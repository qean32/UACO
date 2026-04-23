import { Sex, User } from "@root/prisma/generated/prisma/browser";
import { convertDate } from "./convert-date";
var randomEmail = require('random-email');
var randomPassword = require('generate-password');

export const addFieldToUser = (item:
    Pick<User, "GroupCode" | "dateOfBirth" | "firstName" | "lastName" | "sureName" | "sex">
    |
    Pick<User, "firstName" | "lastName" | "sureName" | "sex" | "dateOfBirth">) => {
    const password = randomPassword.generate({ length: 10 })
    return {
        ...item,
        email: randomEmail({ domain: "uaviak.mcc" }),
        dateOfBirth: convertDate(item.dateOfBirth.toString()),
        password,
        // @ts-ignore
        sex: (item.sex == "M") ? Sex.MALE : Sex.FEMALE
    }
}
