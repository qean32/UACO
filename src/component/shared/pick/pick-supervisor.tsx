import { setValueFormProps } from "@/@types/schema";
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
import { formatFio } from "@/lib/helpers";
import { useGetSupervisorsQuery } from "@/redux/api/supervisor";

export function PickSupervisor({ setValue }: setValueFormProps<any>) {
    const { data } = useGetSupervisorsQuery(RTKQKEY.getSupervisors);

    return (
        <Select onValueChange={(e) => setValue("SupervisorId", e.toString())}>
            <SelectTrigger className="w-full h-10 cursor-pointer">
                <SelectValue placeholder="Организатор" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Организатор</SelectLabel>
                    {!!data?.length && data.map(({ firstName, lastName, sureName, id }) => {
                        return <SelectItem key={id} value={id.toString()}>{formatFio({ firstName, lastName, sureName })}</SelectItem>
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
