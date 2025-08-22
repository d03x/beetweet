import { Media } from "@/components/icon"
import { Btn } from "./components/Btn"
import { useRef } from "react"

export const SelectMediaBtn = ({
    onSelectFile
}: {
    onSelectFile: (file: FileList) => void
}) => {

    const fileRef = useRef<HTMLInputElement>(null)
    function SelectFile() {

        if (fileRef.current) {
            fileRef.current?.click();
        }
    }
    function onChange() {
        if (fileRef.current) {
            const files = fileRef.current.files;
            if( files && files?.length > 0 ){
                onSelectFile(files)
            }
        }
    }
    return <>
        <Btn onPres={SelectFile} icon={Media} />
        <input multiple accept="image/*,video/*"
            ref={fileRef} onChange={onChange} hidden type="file" />
    </>
}