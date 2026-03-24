import { cn } from "@/lib/helpers"

interface Props {
    children: string
    className?: string
}

export const InsertCode: React.FC<Props> = ({ children, className }: Props) => {
    return (
        <pre className={cn("text-sm rounded-sm", className)}><code>{children}</code></pre>
    )
}
