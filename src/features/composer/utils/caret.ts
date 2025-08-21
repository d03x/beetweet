// Simpan posisi caret (menggunakan innerText supaya newline ikut dihitung)
export function saveCaretPosition(el: HTMLElement) {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return null;

  const range = selection.getRangeAt(0);
  const preCaretRange = range.cloneRange();
  preCaretRange.selectNodeContents(el);
  preCaretRange.setEnd(range.endContainer, range.endOffset);

  return preCaretRange.toString().length; // offset caret
}

// Kembalikan caret ke posisi 'pos'
export function restoreCaretPosition(el: HTMLElement, pos: number) {
  const selection = window.getSelection();
  if (!selection) return;

  let charIndex = 0;
  const range = document.createRange();
  range.setStart(el, 0);
  range.collapse(true);

  const nodeStack: ChildNode[] = [el];
  let node: ChildNode | undefined;
  let found = false;

  while (!found && (node = nodeStack.pop())) {
    if (node.nodeType === 3) {
      // teks biasa
      const textLength = node.textContent?.length ?? 0;
      if (pos <= charIndex + textLength) {
        range.setStart(node, pos - charIndex);
        range.collapse(true);
        found = true;
      } else {
        charIndex += textLength;
      }
    } else if (node.nodeName === "BR") {
      // hitung <br> sebagai 1 karakter
      if (pos === charIndex) {
        range.setStartBefore(node);
        range.collapse(true);
        found = true;
      }
      charIndex++;
    } else {
      nodeStack.push(...Array.from(node.childNodes).reverse());
    }
  }

  selection.removeAllRanges();
  selection.addRange(range);
}
