import Link from "next/link";

export default function NotFoundPage() {

    return (
        <div className="flex items-center justify-center h-[100vh]">
            <div className="flex justify-start flex-col gap-2 primary-color ">
                <h1 className="text-7xl font-black uppercase">страница не найдена || 404</h1>
                <Link href={'/'} className="px-2">На главную</Link>
            </div>
        </div>
    );
}
