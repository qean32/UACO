'use client'

import { QueryDrop } from ".."
import { CreateEvent } from "../../modal"
import { PickPeriod } from "../../pick"

export const SupervisorTableUI: React.FC<{}> = () => {

    return <div className='pb-6 flex justify-between'>
        <div className="flex gap-2">
            <PickPeriod />
            <QueryDrop />
            <CreateEvent />
        </div>
    </div>
}
