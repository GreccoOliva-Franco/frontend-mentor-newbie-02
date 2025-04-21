import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Card({
    title,
    text,
    icon,
    className = '',
}: {
    title: string,
    text: string,
    icon: { src: string, alt: string, className?: string },
    className: string
}) {
    return (
        <div className={cn(
            'flex flex-col w-80 h-58 gap-2 rounded-lg shadow-lg p-7 border-t-5',
            className
        )}>
            <h2 className="text-lg font-bold">{ title }</h2>
            <p className="text-xs font-extralight">{ text }</p>
            <div className="flex justify-end">
                <Image 
                    src={icon.src}
                    alt={icon.alt}
                    width={60}
                    height={60}
                    className="mt-3 mb-4"
                />
            </div>
        </div>
    );
}