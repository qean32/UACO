'use client'

import { useGetBestSupervisorsQuery } from "@/redux/api/best";
import { RTKQKEY } from "@/config";
import { Title } from "@/component/ui";
import { formatFio } from "@/lib/helpers";
import Skeleton from "react-loading-skeleton";

export const BestSupervisors: React.FC = () => {
    const { data, isLoading } = useGetBestSupervisorsQuery(RTKQKEY.bestSupervisors);

    return <div className=''>
        <Title size='text-2xl' className="md:text-3xl">Активные организаторы</Title>
        <ol className='min-[320px]:pt-2 md:pt-5'>
            {isLoading && <Skeleton count={5} height={26} width={'60%'} className="mt-3" />}
            {!!data?.length && data.map((item) => <Title key={item.id} size="text-md" className="md:text-xl">{formatFio(item)}</Title>)}
        </ol>
    </div>
}
