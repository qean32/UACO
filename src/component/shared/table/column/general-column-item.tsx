import { Event } from "@root/prisma/generated/prisma/browser"
import { BookmarkCheck } from "lucide-react"

interface Props extends Pick<Event, "name" | "id"> {
    isSort: boolean
}

export const GeneralColumnItem: React.FC<Props> = ({ id, name, isSort }: Props) => {
    return <th data-id={id}
        className='hover-th relative max-w-[100px] hover:max-w-[500px] transition-all duration-300 cursor-pointer'
    >
        <div className="overflow-hidden px-2 w-full hover:px-5 flex gap-2">
            <p className="flex gap-1 items-center">
                {isSort && <BookmarkCheck />}
                {name}
            </p>
        </div>
    </th>
}
