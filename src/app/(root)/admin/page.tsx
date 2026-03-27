'use server'


import { GroupsAndDepartments } from '@/component/shared';
import { PushDepartments, PushGroups, PushStudents } from '@/component/shared/modal';

export default async function Page() {

    return (
        <div className='flex-1 px-15'>
            <div className="flex justify-between pt-10">
                <div className="flex gap-2">
                    <PushStudents />
                    <PushGroups />
                    <PushDepartments />
                </div>
            </div>
            <GroupsAndDepartments />
        </div>
    );
}
