'use server'


import { GroupsAndDepartments } from '@/component/shared/groups&departments';
import { ActionSemester } from '@/component/shared/button';
import { CreateSupervisor, PushDepartments, PushGroups, PushStudents } from '@/component/shared/modal';

export default async function Page() {

    return (
        <div className='flex-1 md:px-15 min-[320px]:px-5'>
            <div className="pt-10">
                <div className="flex gap-2 min-[320px]:flex-col xl:flex-row">
                    <PushStudents />
                    <PushGroups />
                    <PushDepartments />
                    <CreateSupervisor />
                    <ActionSemester
                        action={1}
                        alert='Вы собираетесь перевести группы на следующий семестр'
                        description='Это может привести к коллапсу семестров групп'>
                        Перевести группы на следующий семестр
                    </ActionSemester>
                    <ActionSemester
                        action={-1}
                        alert='Вы собираетесь откатить семетр групп'
                        description='Это может привести к коллапсу семестров групп'>
                        Откатить семетр групп
                    </ActionSemester>
                </div>
            </div>
            <GroupsAndDepartments />
        </div>
    );
}
