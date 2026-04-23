import { datePattern } from "@/config";

export const convertDate = (date: string) => {
    return new Date(date.replace(datePattern, '$3-$2-$1')) ?? new Date()
}
