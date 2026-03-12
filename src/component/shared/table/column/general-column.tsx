'use client'

import React from 'react';
import { Event } from '@prisma'


interface Props {
    events: Pick<Event, "name" | "id">[]
}

export const GeneralColumn: React.FC<Props> = ({ events }: Props) => {

    return (
        <thead className="py-3 bg-gray-200">
            <tr>
                <th className="bg-gray-200">Студент</th>
                {!!events.length &&
                    events.map(({ id, name }) => {
                        return <th key={id}
                            className='hover-th relative max-w-[100px] hover:max-w-[500px] transition-all duration-300'
                        >
                            <div className="overflow-hidden px-2 w-full hover:px-5">
                                {name}
                            </div>
                        </th>
                    })
                }
            </tr>
        </thead>
    );
}
