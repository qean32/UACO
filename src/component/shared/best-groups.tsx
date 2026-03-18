'use client'

import { useGetBestGroupsQuery } from "@/store/best";
import { RTKQKEY } from "@/config";
import { Title } from "../ui";
import Skeleton from 'react-loading-skeleton'


export const BestGroups: React.FC = () => {
    const { data, isLoading } = useGetBestGroupsQuery(RTKQKEY.bestGroups);

    return <div className='flex flex-col w-1/3'>
        <Title size='text-2xl'>Активные группы</Title>
        <ol className='pt-5'>
            {isLoading && <Skeleton count={5} height={26} width={'70%'} className="mt-3" />}
            {!!data?.length && data.map(item => {
                return <div key={item.GroupCode} className='grid' style={{ gridTemplateColumns: '1fr 2fr' }}>
                    <Title className='w-[100px]'>{item.GroupCode}</Title>
                </div>
            })}
        </ol>
    </div>
}
