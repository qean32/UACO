'use server'


import { GroupsAndDepartments } from '@/component/shared';
import { ActionSemester } from '@/component/shared/button';
import { CreateSupervisor, PushDepartments, PushGroups, PushStudents } from '@/component/shared/modal';

export default async function Page() {

    return (
        <div className='flex-1 px-15'>
            <div className="flex justify-between pt-10">
                <div className="flex gap-2">
                    <PushStudents />
                    <PushGroups />
                    <PushDepartments />
                    <CreateSupervisor />
                    <ActionSemester
                        action={1}
                        alert=''
                        description=''>
                        Перевести группы на следующий семестр
                    </ActionSemester>
                    <ActionSemester
                        action={-1}
                        alert=''
                        description=''>
                        Откатить семетр групп
                    </ActionSemester>
                </div>
            </div>
            <GroupsAndDepartments />
        </div>
    );
}
