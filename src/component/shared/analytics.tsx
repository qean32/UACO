'use client'

import { BestGroups, BestSupervisors } from './';


interface Props {
}

const Analytics: React.FC<Props> = ({ }: Props) => {

    return (
        <div className='w-full flex max-h-[500px] gap-5 bg-gray-200 pt-15 px-15 overflow-hidden'>
            <div className='w-2/3 -translate-y-1/3 h-[400px]'>
            </div>
            <div className='flex w-2/4 justify-around gap-5'>
                <BestGroups />
                <BestSupervisors />
            </div>
        </div>
    );
}

export default Analytics
