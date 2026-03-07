import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/component/ui/select"

export function PickSupervisor() {
    return (
        <Select>
            <SelectTrigger className="w-full h-[40px] cursor-pointer">
                <SelectValue placeholder="Организатор" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Организатор</SelectLabel>
                    {[].map(item => <SelectItem key={item} value={item}>{item}</SelectItem>)}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
