"use client";
import Paragraph from "@tiptap/extension-paragraph";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from '@tiptap/starter-kit'
import Text from "@tiptap/extension-text";
import { Placeholder } from "@tiptap/extensions";
import Mention from "@tiptap/extension-mention";
import { TextStyle, FontSize } from "@tiptap/extension-text-style"
import { useEffect } from "react";
import { wordLimitHighlight } from "../extensions/wordLimitHighlight";
export const TextInput = ({ onTextChange, onFocus, maxWords, onBlur }: {
    onBlur?: () => void,
    onTextChange: (html: string, plain?: string) => void;
    onFocus?: () => void,
    maxWords: number,
}) => {
    const editor = useEditor({
        editable: true,
        autofocus: 'end',
        injectCSS: true,
        onFocus: onFocus,
        onBlur: onBlur,
        extensions: [
            wordLimitHighlight.configure({
                maxWords,
            }),
            StarterKit,
            Text,
            FontSize,
            TextStyle,
            Mention.configure({
                HTMLAttributes: {
                    class: "mention"
                },
            }),
            Placeholder.configure({
                placeholder(PlaceholderProps) {
                    return "Type your text here...";
                },
            }),
            Paragraph.configure({
                HTMLAttributes: {
                    class: 'paragraph-composer text-md',
                }
            })],
        immediatelyRender: false,
        editorProps: {
            attributes: {
                class: ' text-text-secondary break-all max-h-[300px] overflow-y-auto w-full px-3  rounded outline-none ',
            },
        },
    })


    useEffect(() => {
        editor?.on("update", () => {
            const content = editor.getHTML() || "";
            onTextChange(content, editor.getText());
        })
    }, [editor])

    return <EditorContent editor={editor} />
}