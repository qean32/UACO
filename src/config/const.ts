export const DEFAULT_TAKE = 20

export const dataTimeOption = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    timezone: "UTC",
}

export const pick_courses = [
    "1", "2", "3", "4"
]

export const pick_estimations = [
    "1", "2", "3", "4", "5"
]

export const pick_months = [
    { value: "1", title: "Январь" },
    { value: "2", title: "Февраль" },
    { value: "3", title: "Март" },
    { value: "4", title: "Апрель" },
    { value: "5", title: "Май" },
    { value: "6", title: "Июнь" },
    { value: "7", title: "Июль" },
    { value: "8", title: "Август" },
    { value: "9", title: "Сентябрь" },
    { value: "10", title: "Октябрь" },
    { value: "11", title: "Ноябрь" },
    { value: "12", title: "Декабрь" },

]

export enum Period {
    Month = "Month",
    Week = "Week"
}

export const pick_periods = [
    { value: Period.Week, ru: "Неделя" },
    { value: Period.Month, ru: "Месяц" },
    { value: " ", ru: "Все время" },
]
