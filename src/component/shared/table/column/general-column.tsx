'use client'

import React from 'react';
import { Event } from '@prisma'


interface Props {
    events: Event[]
}

export const GeneralColumn: React.FC<Props> = ({ events }: Props) => {

    return (
        <div className="rounded-t-sm px-4 text-sm font-medium grid bg-gray-300 py-3" style={{ gridTemplateColumns: '12fr 1fr 1fr' }} >
            <p>Студент</p>
            {!!events.length &&
                events.map(({ id, name }) => {
                    return <p key={id}>{name}</p>
                })
            }
        </div>
    );
}