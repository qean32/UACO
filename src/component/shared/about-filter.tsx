'use client'

import { useSearchParams } from "next/navigation"
import { Button } from "../ui"

export const AboutFilter: React.FC = () => {
    const queries = useSearchParams()
    const place =
        (queries?.get("group") ? `Студенты группы ${queries.get("group")} ` : "Все студенты ")
        + (queries?.get("department") ? `отделения ${queries.get("department")} ` : "")
        + (queries?.get("course") ? `${queries.get("course")} курса ` : "")
        + (queries?.get("date") ? `За ${queries.get("date")}` : "за все время")

    return <Button>{place}</Button>
}
