import { PickPeriod } from "./pick"
import { StudentTable } from "./table"

export const StudentContentPage: React.FC<{ id: number }> = ({ id }: { id: number }) => {
    return (
        <div className="flex flex-col px-5 rounded-md w-full ml-5">
            <div className='flex gap-4 py-4'>
                <p className='font-medium'>Период</p>
                <PickPeriod />
            </div>
            <StudentTable id={id} />
        </div>
    )
}
