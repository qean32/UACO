'use client'

import { useGetBestSupervisorsQuery } from "@/redux/api/best";
import { RTKQKEY } from "@/config";
import { Title } from "@/component/ui";
import { formatFio } from "@/lib/helpers";
import Skeleton from "react-loading-skeleton";

export const BestSupervisors: React.FC = () => {
    const { data, isLoading } = useGetBestSupervisorsQuery(RTKQKEY.bestSupervisors);

    return <div className='flex flex-col w-2/3'>
        <Title size='text-2xl'>Активные организаторы</Title>
        <ol className='pt-5'>
            {isLoading && <Skeleton count={5} height={26} width={'60%'} className="mt-3" />}
            {!!data?.length && data.map(({ firstName, lastName, sureName, id }) => {
                return <div key={id} className='grid' style={{ gridTemplateColumns: '1fr 2fr' }}>
                    <Title className='w-[200px]'>{formatFio({ firstName, lastName, sureName })}</Title>
                </div>
            })}
        </ol>
    </div>
}
