import Link from "next/link";

export default function PageForbidden() {

    return (
        <div className="flex items-center justify-center h-[100vh]">
            <div className="flex justify-start flex-col gap-2 primary-color -translate-y-1/2">
                <h1 className="text-7xl font-black uppercase">доступ закрыт</h1>
                <Link href={'/'} className="px-1">На главную</Link>
            </div>
        </div>
    );
}
