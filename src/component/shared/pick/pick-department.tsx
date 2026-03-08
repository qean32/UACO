import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/component/ui/select"
import { RTKQKEY } from "@/config";
import { useGetDepartmentsQuery } from "@/store/department";

export function PickDepartment() {
    const { data } = useGetDepartmentsQuery(RTKQKEY.getDepartments);

    return (
        <Select>
            <SelectTrigger className="w-full h-[40px] cursor-pointer">
                <SelectValue placeholder="Отделение" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Отделение</SelectLabel>
                    {!!data?.length && data.map(({ code, name }) => {
                        return <SelectItem key={code} value={code}>{name}</SelectItem>
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
