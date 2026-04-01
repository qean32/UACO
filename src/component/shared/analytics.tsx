'use client'

import { BestGroups, BestSupervisors } from './';


interface Props {
}

const Analytics: React.FC<Props> = ({ }: Props) => {

    return (
        <div className='w-full flex max-h-125 gap-5 bg-gray-200 pt-10 md:md:px-15 min-[320px]:px-5 min-[320px]:px-5 overflow-hidden pb-5'>
            <div className='flex gap-5 flex-col'>
                <BestGroups />
                <BestSupervisors />
            </div>
        </div>
    );
}

export default Analytics
