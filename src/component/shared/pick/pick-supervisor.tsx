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
import { useGetSupervisorsQuery } from "@/store/supervisor";

export function PickSupervisor() {
    const { data } = useGetSupervisorsQuery(RTKQKEY.getSupervisors);

    return (
        <Select>
            <SelectTrigger className="w-full h-[40px] cursor-pointer">
                <SelectValue placeholder="Организатор" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Организатор</SelectLabel>
                    {!!data?.length && data.map(({ firstName, lastName, sureName, id }) => {
                        return <SelectItem key={id} value={id.toString()}>{firstName} {sureName.at(0)}. {lastName.at(0)}.</SelectItem>
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
