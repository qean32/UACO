'use client'

import { useGetBestGroupsQuery } from "@/redux/api/best";
import { RTKQKEY } from "@/config";
import { Title } from "@/component/ui";
import Skeleton from 'react-loading-skeleton'


export const BestGroups: React.FC = () => {
    const { data, isLoading } = useGetBestGroupsQuery(RTKQKEY.bestGroups);

    return <div className=''>
        <Title size='text-2xl'>Активные группы</Title>
        <ol className='min-[320px]:pt-2 md:pt-5'>
            {isLoading && <Skeleton count={5} height={26} width={'70%'} className="mt-3" />}
            {!!data?.length && data.map(item => <Title size="text-md" key={item.GroupCode}>{item.GroupCode}</Title>)}
        </ol>
    </div>
}
