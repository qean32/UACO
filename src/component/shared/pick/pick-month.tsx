import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/component/ui/select"

export function PickMounth() {
    return (
        <Select>
            <SelectTrigger className="h-[40px] bg-white cursor-pointer">
                <SelectValue placeholder="Месяц" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Месяц</SelectLabel>
                    <SelectItem value="1">Январь</SelectItem>
                    <SelectItem value="2">Февраль</SelectItem>
                    <SelectItem value="3">Март</SelectItem>
                    <SelectItem value="4">Апрель</SelectItem>
                    <SelectItem value="5">Май</SelectItem>
                    <SelectItem value="6">Июнь</SelectItem>
                    <SelectItem value="7">Июль</SelectItem>
                    <SelectItem value="8">Август</SelectItem>
                    <SelectItem value="9">Сентябрь</SelectItem>
                    <SelectItem value="10">Октябрь</SelectItem>
                    <SelectItem value="11">Ноябрь</SelectItem>
                    <SelectItem value="12">Декабрь</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
