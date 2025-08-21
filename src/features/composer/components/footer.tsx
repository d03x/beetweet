import { Calendar, EmojiIconLine, Lists, Media, MediaGif } from "@/components/icon";
import { SelectVisibility } from "../SelectVisibility";
import { Btn } from "./Btn";
import { WordMeter } from "./word-meter";
type FooterProps = {
    remainderTextWords: number;
    remainderTextPercentage: number;
    maxwordCount: number,
}
export const Footer = ({ remainderTextWords, maxwordCount, remainderTextPercentage }: FooterProps) => {
    return <div className="flex items-center justify-between py-3 border-t border-primary-outline">
        <div className="flex space-x-2">
            <Btn icon={Media} />
            <Btn icon={MediaGif} />
            <Btn icon={EmojiIconLine} />
            <Btn icon={Lists} />
            <Btn icon={Calendar} />
        </div>
        <div className="ml-auto flex items-center space-x-3">
            <WordMeter
                remainderTextPercentage={remainderTextPercentage}
                maxwordCount={maxwordCount}
                remainderTextWords={remainderTextWords}
            />
            <button className="bg-button-primary-background px-5 text-xs text-button-primary-text cursor-pointer font-semibold py-2 rounded-full">POST</button>

        </div>
    </div>
}