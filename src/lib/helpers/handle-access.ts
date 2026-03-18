import { toastConfig } from "@/config"
import { toast } from "sonner"

export const handleAccess = (res: any, { title, description }: { title: string, description: string }) => {
    if (res) {
        toast(title, {
            ...toastConfig,
            description
        })
    }
}
