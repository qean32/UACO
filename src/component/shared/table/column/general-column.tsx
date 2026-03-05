'use client'

import React from 'react';
import { Event } from '@prisma'


interface Props {
    events: Pick<Event, "name" | "id">[]
}

export const GeneralColumn: React.FC<Props> = ({ events }: Props) => {

    return (
        <thead>
            <tr className="rounded-t-sm bg-gray-300 py-3">
                <th className='pl-5'>Студент</th>
                {!!events.length &&
                    events.map(({ id, name }) => {
                        return <th
                            key={id}
                            className='px-3 text-center max-w-[100px] hover:px-5 overflow-hidden hover:max-w-[500px] transition-all duration-200 cursor-pointer hidden-cell'
                        >{name}</th>
                    })
                }
            </tr>
        </thead>
    );
}