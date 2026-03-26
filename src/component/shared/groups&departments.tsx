'use client'

import { RTKQKEY } from "@/config";
import { useGetDepartmentsQuery } from "@/store/department";
import { useGetGroupsQuery } from "@/store/group";

export const GroupsAndDepartmetns: React.FC<{}> = ({ }: {}) => {
    const { data: department } = useGetDepartmentsQuery(RTKQKEY.getDepartments);
    const { data: groups } = useGetGroupsQuery(RTKQKEY.getGroups);
    console.log(groups, department)

    return (
        <div className='w-full flex max-h-[400px] gap-5 bg-gray-200 pt-15 px-15 overflow-hidden'>
        </div>
    );
}
