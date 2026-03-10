'use client'

import { useGetBestGroupsQuery } from "@/store/best";
import { RTKQKEY } from "@/config";
import { Title } from "../ui";

export const BestGroups: React.FC = () => {
    const { data } = useGetBestGroupsQuery(RTKQKEY.bestGroups);

    return <div className='flex flex-col w-1/3'>
        <Title size='text-2xl'>Активные группы</Title>
        <ol className='pt-5'>
            {!!data?.length && data.map(item => {
                return <div key={item.code} className='grid' style={{ gridTemplateColumns: '1fr 2fr' }}>
                    <Title className='w-[100px]'>{item.GroupCode}</Title>
                </div>
            })}
        </ol>
    </div>
}
