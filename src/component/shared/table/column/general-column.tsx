'use client'

import React from 'react';
import { Event } from '@prisma'
import { usePushQuery } from '@/lib/hooks';
import { getGataId } from '@/lib/helpers';
import { GeneralColumnItem } from '.';
import { useSearchParams } from 'next/navigation';


interface Props {
    events: Pick<Event, "name" | "id">[]
}

export const GeneralColumn: React.FC<Props> = ({ events }: Props) => {
    const { push } = usePushQuery()
    const searchParams = useSearchParams()
    const EventId = searchParams?.get("EventId")

    const filter = (e: React.MouseEvent<HTMLDivElement>) => {
        push({ EventId: getGataId(e) })
    }

    return (
        <thead className="py-3 bg-gray-200">
            <tr onClick={filter}>
                <th className="bg-gray-200">Студент</th>
                {!!events.length &&
                    events.map((item) => {
                        return <GeneralColumnItem key={item.id} {...item} isSort={item.id == (EventId ?? 0)} />
                    })
                }
            </tr>
        </thead>
    );
}
