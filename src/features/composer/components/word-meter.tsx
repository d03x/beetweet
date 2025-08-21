import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

type FooterProps = {
    remainderTextWords: number;
    remainderTextPercentage: number;
    maxwordCount: number,
}
export const WordMeter = ({ remainderTextWords, maxwordCount, remainderTextPercentage }: FooterProps) => {
    return <div className="flex items-center  space-x-2">
        {
            remainderTextWords < maxwordCount ? <div className="text-xs">
                {remainderTextWords > 0 ? <span>{remainderTextWords}</span> : <span className="text-red-500">{remainderTextWords}</span>} / {maxwordCount}
            </div> : <div className="text-xs">{maxwordCount}</div>
        }
        <div className="h-5 w-5">
            <CircularProgressbar
                styles={buildStyles({
                    pathColor: remainderTextWords > 0 ? "#77a7ff" : "red",
                })} strokeWidth={15} value={remainderTextPercentage} />
        </div>
    </div>
}