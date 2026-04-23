"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { Button } from "@/component/ui/button"
import { Calendar } from "@/component/ui/calendar"
import { ru } from "date-fns/locale"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/component/ui/popover"
import { setValueFormProps } from "@/@types/schema"

export function DatePicker({ setValue }: setValueFormProps<any>) {
    const [date, setDate] = React.useState<Date>()
    React.useEffect(() => {
        if (date) {

            setValue("date", date)
        }
    }, [date])

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    isDefault={false}
                    variant="outline"
                    data-empty={!date}
                    className="data-[empty=true]:text-muted-foreground w-full h-10 justify-start text-left font-normal cursor-pointer"
                >
                    <CalendarIcon />
                    {date ? format(date, "PPP", { locale: ru }) : <span>Дата</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} locale={ru} />
            </PopoverContent>
        </Popover>
    )
}
