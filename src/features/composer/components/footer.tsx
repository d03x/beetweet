import { Calendar, EmojiIconLine, Lists, Media, MediaGif } from "@/components/icon";
import { SelectVisibility } from "../SelectVisibility";
import { Btn } from "./Btn";
import { WordMeter } from "./word-meter";
import { SelectMediaBtn } from "../MediaSelect";
import { useComposer } from "../contexts/ComposerContextProvider";
type FooterProps = {
    remainderTextWords: number;
    remainderTextPercentage: number;
    maxwordCount: number,
}
export const Footer = ({ remainderTextWords, maxwordCount, remainderTextPercentage }: FooterProps) => {
    const ctx = useComposer();
    function onSelectFile(file: FileList) {
        ctx.setMediaAssets(file);
    }
    return <div className="flex items-center justify-between py-3 border-t border-primary-outline">
        <div className="flex space-x-2">
            <SelectMediaBtn
                onSelectFile={onSelectFile}
            />
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