import { ChangeEvent, ChangeEventHandler, useEffect, useRef, useState } from "react"
import { useCreatePostContext } from "../contexts/CreatePostContextProvider"

import { position, offset } from "caret-pos"
import { restoreCaretPosition, saveCaretPosition } from "../utils/caret"

export const CreatePostFormContent = () => {
    const divRef = useRef<HTMLDivElement>(null)
    const ctx = useCreatePostContext()

    function setMentioned(text: string) {
        if (divRef.current) {
            const caret = saveCaretPosition(divRef.current) ?? 0;
            let mentionRefex = /(#\w+)/g;
            let highlightedText = text.replace(mentionRefex, (match) => {
                return `<span class="text-blue-500 font-semibold">${match}</span>`;
            })
            console.log(caret);
            
            divRef.current.innerHTML = highlightedText;
            restoreCaretPosition(divRef.current, caret);
        }
    }

    const setTextChange = () => {
        if (!divRef.current) return;
        const text = divRef.current.innerText;
        if (text.length > ctx.maxWords) {
            return;
        }
        if (text.slice(0, 1) == '\n') {
            divRef.current.setAttribute('data-placeholder', divRef.current.getAttribute('data-placeholder') || '');
            divRef.current.classList.add('show-placheolder');
        } else {
            divRef.current.classList.remove('show-placheolder');

        }
        setMentioned(text);
        ctx.setContent(text);

    }

    const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
        e.preventDefault();
        const text = e.clipboardData.getData("text/plain");
        document.execCommand("insertText", false, text);    // masukkan tanpa style
    }


    return <div>
        <div
            ref={divRef}
            contentEditable
            onPaste={handlePaste}
            onInput={setTextChange}
            data-placeholder="What is happening?!"
            className="break-all  cursor-text w-full outline-none text-lg whitespace-pre-wrap break-words px-1
                       empty:before:text-text-secondary empty:before:content-[attr(data-placeholder)]"
        />
    </div>
}

