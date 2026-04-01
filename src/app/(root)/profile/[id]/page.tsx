'use server'


import { Information } from '@/component/shared/info';
import { UserTable } from '@/component/shared/table';
import { PersonalAccountTitle } from '@/component/ui';

export default async function Page({ params }: any) {
    const { id } = await params

    return (
        <div className='flex-1 md:px-15 min-[320px]:px-5'>
            <PersonalAccountTitle id={id} />
            <div className="flex justify-between min-[320px]:flex-col xl:flex-row">
                <Information id={id} />
                <UserTable id={id} />
            </div>
        </div>
    );
}
