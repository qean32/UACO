'use client'

import { RTKQKEY } from "@/config";
import { useGetDepartmentsQuery } from "@/store/department";
import { useGetGroupsQuery } from "@/store/group";

export const GroupsAndDepartments: React.FC<{}> = ({ }: {}) => {
    const { data: department } = useGetDepartmentsQuery(RTKQKEY.getDepartments);
    const { data: groups } = useGetGroupsQuery(RTKQKEY.getGroups);

    return (
        <div className=''>
            {!!department?.length && department.map(item => {
                return <div className="" key={item.code}>{item.name} {item.code}</div>
            })}

            {!!groups?.length && groups.map(item => {
                return <div className="" key={item.code}>{item.DepartmentCode} {item.code}</div>
            })}
        </div>
    );
}
