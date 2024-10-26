import Image from "next/image";

export const Loading = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-y-4">
            <Image width={120} height={120} src="./logo.svg" className=" animate-pulse duration-700" alt={"loading"} />
        </div>
    )
}