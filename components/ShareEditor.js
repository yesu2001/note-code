"use client";

import React, { useCallback, useState } from "react";
import {
  code,
  themeOptions,
  langOptions,
  generateUniqueId,
} from "../constants";
import CodeEditor from "./CodeEditor";
import BoxFooter from "./BoxFooter";

export default function ShareEditor() {
  const [theme, setTheme] = useState(themeOptions[0]);
  const [lang, setLang] = useState(langOptions[0]);
  const [value, setValue] = useState(code);

  const onChange = useCallback((val, viewUpdate) => {
    console.log("val:", val);
    setValue(val);
  }, []);

  return (
    <div className="bg-white flex flex-col shadow-lg my-12 rounded-lg w-[90%] md:w-[70vw] h-[90vh] px-6">
      <CodeEditor theme={theme} lang={lang} value={value} onChange={onChange} />
      <BoxFooter
        theme={theme}
        lang={lang}
        setLang={setLang}
        setTheme={setTheme}
      />
    </div>
  );
}
