import { toastConfig } from "@/config"
import { toast } from "sonner"

export const handleAccess = (res: any) => {
    if (res) {
        toast(res.message, {
            ...toastConfig,
            description: res.description
        })
    }
}
