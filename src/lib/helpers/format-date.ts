import { dataTimeOption } from "@/config"

export const formatDate = (date: Date | string) => {
    // @ts-ignore
    return new Date(date.toString()).toLocaleString("ru", dataTimeOption)   

}