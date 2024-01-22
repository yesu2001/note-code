import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { basicLight, basicDark } from "@uiw/codemirror-theme-basic";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";

export default function CodeEditor({ theme, lang, value, onChange }) {
  console.log(lang.value);
  return (
    <div className="flex-[1] my-4">
      <CodeMirror
        value={value}
        height="500px"
        theme={theme.value === "light" ? basicLight : basicDark}
        extensions={[loadLanguage(lang.value)]}
        onChange={onChange}
      />
    </div>
  );
}
