import Link from "next/link";

export default function NotFoundPage() {

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex justify-start flex-col gap-2 primary-color -translate-y-1/2">
                <h1 className="lg:text-6xl min-[320px]:text-xl text-center font-black uppercase">страница не найдена</h1>
                <Link href={'/'} className="text-center px-1 font-bold">На главную</Link>
            </div>
        </div>
    );
}
