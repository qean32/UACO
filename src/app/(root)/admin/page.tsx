'use server'


import { SupervisorContentPage } from '@/component/shared';
import { PushStudents } from '@/component/shared/modal';

export default async function Page() {

    return (
        <div className='flex-1 px-15'>
            <div className="flex justify-between pt-10">
                <div className="flex flex-col gap-2">
                    <PushStudents />
                    <PushStudents />
                    <PushStudents />
                </div>
                <SupervisorContentPage />
            </div>
        </div>
    );
}
