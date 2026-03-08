import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/component/ui/select"
import { Input } from "@/component/ui/input"
import { RTKQKEY } from "@/config";
import { useGetGroupsQuery } from "@/store/group";

export function PickGroup() {
    const { data } = useGetGroupsQuery(RTKQKEY.getGroups);
    const [search, setSearch] = useState("");

    const filteredGroups = data?.filter((group) =>
        group.code.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Select>
            <SelectTrigger className="w-full h-[40px] cursor-pointer">
                <SelectValue placeholder="Группа" />
            </SelectTrigger>
            <SelectContent>
                <div className="p-2">
                    <Input
                        placeholder="Поиск группы..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="h-8"
                    />
                </div>
                <SelectGroup>
                    <SelectLabel>Группа</SelectLabel>
                    {!!filteredGroups?.length && filteredGroups.map(({ code }) => {
                        return <SelectItem key={code} value={code}>{code}</SelectItem>
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
