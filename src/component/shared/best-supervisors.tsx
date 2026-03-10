'use client'

import { useGetBestSupervisorsQuery } from "@/store/best";
import { RTKQKEY } from "@/config";
import { Title } from "../ui";
import { formatFio } from "@/lib/helpers";

export const BestSupervisors: React.FC = () => {
    const { data } = useGetBestSupervisorsQuery(RTKQKEY.bestSupervisors);

    return <div className='flex flex-col w-2/3'>
        <Title size='text-2xl'>Активные организаторы</Title>
        <ol className='pt-5'>
            {!!data?.length && data.map(({ firstName, lastName, sureName, id }) => {
                return <div key={id} className='grid' style={{ gridTemplateColumns: '1fr 2fr' }}>
                    <Title className='w-[200px]'>{formatFio({ firstName, lastName, sureName })}</Title>
                </div>
            })}
        </ol>
    </div>
}
