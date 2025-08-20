import React, { useState, useRef, useEffect } from "react";

const dummyUsers = ["dadan", "dimas", "imre", "nagi", "supriatna"];

export default function BeetWeetEditor() {
  const [text, setText] = useState("");
  const [highlighted, setHighlighted] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState<string[]>([]);
  const [cursorPos, setCursorPos] = useState({ top: 0, left: 0 });
  const divRef = useRef<HTMLDivElement>(null);

  // highlight regex
  useEffect(() => {
    let html = text
      .replace(/(@\w+)/g, '<span class="text-blue-500">$1</span>')
      .replace(/(#\w+)/g, '<span class="text-blue-500">$1</span>');
    setHighlighted(html);
  }, [text]);

  // ambil caret posisi (untuk popup)
  function getCaretCoordinates() {
    let sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return { top: 0, left: 0 };
    let range = sel.getRangeAt(0).cloneRange();
    range.collapse(false);
    let rect = range.getClientRects()[0];
    if (rect) return { top: rect.bottom, left: rect.left };
    return { top: 0, left: 0 };
  }

  const handleInput = () => {
    const value = divRef.current?.innerText || "";
    setText(value);

    const match = value.match(/@(\w*)$/); // cek terakhir ada @
    if (match) {
      const query = match[1].toLowerCase();
      const filtered = dummyUsers.filter((u) => u.startsWith(query));
      setFilteredUsers(filtered);
      setShowSuggestions(true);
      setCursorPos(getCaretCoordinates());
    } else {
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      alert("Submit: " + text);
      divRef.current!.innerText = "";
      setText("");
      setHighlighted("");
      return;
    }
  };

  const insertMention = (username: string) => {
    const content = text.replace(/@(\w*)$/, `@${username} `);
    setText(content);
    divRef.current!.innerText = content;
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-full max-w-xl border rounded-2xl p-3">
      {/* highlight layer */}
      <div
        className="absolute inset-0 whitespace-pre-wrap break-words text-transparent pointer-events-none"
        dangerouslySetInnerHTML={{ __html: highlighted + "<br />" }}
        style={{ WebkitTextFillColor: "transparent" }}
      />

      {/* input layer */}
      <div
        ref={divRef}
        contentEditable
        className="relative bg-transparent outline-none whitespace-pre-wrap break-words min-h-[60px]"
        onInput={handleInput}
        onKeyDown={handleKeyDown}
      />

      {/* suggestion popup */}
      {showSuggestions && filteredUsers.length > 0 && (
        <ul
          className="absolute bg-white shadow-lg border rounded-lg"
          style={{ top: cursorPos.top + 4, left: cursorPos.left }}
        >
          {filteredUsers.map((u) => (
            <li
              key={u}
              className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
              onMouseDown={(e) => {
                e.preventDefault(); // biar tidak hilang fokus
                insertMention(u);
              }}
            >
              @{u}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
