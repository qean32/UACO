import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/component/ui/select"
import { pick_estimations } from "@/config"
import { useUser } from "@/lib/hooks"
import { usePostEstimationMutation } from "@/redux/api/estimation"

export function PickEstimation(props: { estimation: number, id: number }) {
    const user = useUser()
    const [trigger] = usePostEstimationMutation()

    const changeHandler = (e: string) => {

        trigger(JSON.stringify({ estimation: e, EventId: props.id, UserId: user?.id }))
    }
    return (
        <Select onValueChange={changeHandler}
            {...props?.estimation && { defaultValue: props?.estimation?.toString() }}
        >
            <SelectTrigger className="w-full h-10 cursor-pointer bg-gray-50">
                <SelectValue placeholder="Оценить" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {pick_estimations.map(item => {
                        return <SelectItem key={item} value={item}>{item}</SelectItem>
                    })}
                </SelectGroup>
            </SelectContent>
        </Select >
    )
}
