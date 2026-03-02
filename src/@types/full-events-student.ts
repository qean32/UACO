export type FEventStudentTableItemDto = {
    User: {
        first_name: string
        last_name: string
        sure_name: string
    },
    UserId: number
    gradeEvents: { EventId: number, presence: boolean }[]
}