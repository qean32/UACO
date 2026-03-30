import { setValueFormProps, TformFilterSchema } from "@/@types/schema";
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
import { useGetDepartmentsQuery } from "@/redux/api/department";

export function PickDepartment({ setValue }: setValueFormProps<TformFilterSchema>) {
    const { data } = useGetDepartmentsQuery(RTKQKEY.getDepartments);

    return (
        <Select onValueChange={(e) => setValue("department", e.toString())}>
            <SelectTrigger className="w-full h-10 cursor-pointer">
                <SelectValue placeholder="Отделение" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Отделение</SelectLabel>
                    {!!data?.length && data.map(({ code, name }) => {
                        return <SelectItem key={code} value={name}>{name}</SelectItem>
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
