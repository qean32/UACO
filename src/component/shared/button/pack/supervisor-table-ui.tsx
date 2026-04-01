'use client'

import { QueryDrop } from ".."
import { CreateEvent } from "../../modal"
import { PickPeriod } from "../../pick"

export const SupervisorTableUI: React.FC<{}> = () => {

    return <div className='flex md:flex-row min-[320px]:flex-col gap-2 pt-5 pb-5'>
        <PickPeriod />
        <QueryDrop />
        <CreateEvent />
    </div>
}
