'use client'

import { AdminDepartments } from "./admin-departments";
import { AdminGroups } from "./admin-groups";

export const GroupsAndDepartments: React.FC<{}> = ({ }: {}) => {

    return (
        <>
            <AdminDepartments />
            <AdminGroups />
        </>
    );
}
