import { Extension } from "@tiptap/react";
import { Plugin, PluginKey } from '@tiptap/pm/state'
import { Decoration, DecorationSet } from "@tiptap/pm/view";
type CustomExtensionOptions = {
    maxWords: number;
}

declare module '@tiptap/core' {
    interface ExtensionOptions {
        customOption: CustomExtensionOptions
    }
}
const wordLimitHighlight = Extension.create<CustomExtensionOptions>({
    name: "wordLimitHighlight",
    addOptions() {
        return {
            maxWords: 60, // default max words
        }
    },
    addProseMirrorPlugins() {
        const { maxWords } = this.options
        return [
            new Plugin({
                props: {
                    decorations(state) {
                        const text = state.doc.textBetween(0, state.doc.content.size, undefined, '\n');
                        const words = text.split(/\s+/).filter(Boolean);
                        const decorations: Decoration[] = [];
                        if (words.length + 1 > maxWords) {
                            let wordCount = 0;
                            let pos = 0;
                            state.doc.descendants((node, posStart) => {
                                if (!node.isText) return;
                                const nodeWords = node.text?.split(/\s+/).filter(Boolean) ?? [];
                                nodeWords.forEach((word) => {
                                    wordCount++;
                                    if (wordCount === maxWords) {
                                        pos = posStart + node.text!.indexOf(word);
                                    }
                                });
                            });
                            const deco = Decoration.inline(
                                pos,
                                state.doc.content.size,
                                { class: "text-red-500" }
                            );
                            decorations.push(deco);
                        }
                        return DecorationSet.create(state.doc, decorations);
                    },
                }
            })
        ]
    }
})
export { wordLimitHighlight }