import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/component/ui/select"

export function PickEstimation() {
    return (
        <Select>
            <SelectTrigger className="w-full h-[40px] cursor-pointer bg-gray-50">
                <SelectValue placeholder="Оценить" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
