"use client";

import React, { useCallback, useEffect, useState } from "react";
import { code, themeOptions, langOptions } from "../constants";
import CodeEditor from "./CodeEditor";
import BoxFooter from "./BoxFooter";
import axios from "axios";

export default function ShareEditor({ codeId }) {
  const [theme, setTheme] = useState(themeOptions[0]);
  const [lang, setLang] = useState(langOptions[0]);
  const [value, setValue] = useState(code);
  const [link, setLink] = useState(null);

  useEffect(() => {
    if (codeId) {
      axios
        .get(`http://localhost:3000/api/codepush/${codeId}`)
        .then((response) => {
          console.log(response.data);
          const doc = response.data.doc;
          const getID = doc?.code_id;
          const formLink = `${window.location.origin}/${getID}`;
          setLink(formLink);
          setValue(doc?.code_text);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [codeId]);

  const onChange = useCallback((val, viewUpdate) => {
    console.log("val:", val);
    setValue(val);
  }, []);

  return (
    <div className="bg-white mx-auto shadow-lg my-12 rounded-lg w-[90%] md:w-[70vw] h-auto md:h-[90vh] pt-2 px-6">
      <CodeEditor theme={theme} lang={lang} value={value} onChange={onChange} />
      <BoxFooter
        theme={theme}
        lang={lang}
        setLang={setLang}
        setTheme={setTheme}
        code={value}
        link={link}
      />
    </div>
  );
}
