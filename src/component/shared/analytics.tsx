'use client'

import dynamic from 'next/dynamic';
import { BestGroups, BestSupervisors } from './';

const BestGroupDiagram = dynamic(() => import("@/component/shared/best-group-diagram"));

interface Props {
}

const Analytics: React.FC<Props> = ({ }: Props) => {

    return (
        <div className='w-full flex gap-5 bg-gray-200 pt-10 md:md:px-15 min-[320px]:px-5 overflow-hidden pb-5 md:min-h-120 min-[320px]:flex-col md:flex-row xl:justify-between xl:pb-10'>
            <div className="pb-5 md:w-1/2 xl:w-1/4">
                <BestGroupDiagram />
            </div>
            <div className='flex gap-5 xl:gap-10 min-[320px]:flex-col lg:flex-row md:ml-5'>
                <BestGroups />
                <BestSupervisors />
            </div>
        </div>
    );
}

export default Analytics
