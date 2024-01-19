"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import CodeMirror from "@uiw/react-codemirror";
import { basicLight, basicDark } from "@uiw/codemirror-theme-basic";
import { loadLanguage, langs } from "@uiw/codemirror-extensions-langs";
import dropIcon from "../assets/down arrow.svg";
import shareIcon from "../assets/Share.svg";

export default function ShareEditor() {
  const [theme, setTheme] = useState("light");
  const [value, setValue] = useState(code);
  const onChange = useCallback((val, viewUpdate) => {
    console.log("val:", val);
    setValue(val);
  }, []);
  console.log(langs);

  return (
    <div className="bg-white flex flex-col shadow-lg my-12 rounded-lg w-[90%] md:w-[70vw] h-[90vh] px-6">
      <div className="flex-[1] my-4">
        <CodeMirror
          value={value}
          height="500px"
          theme={theme === "light" ? basicLight : basicDark}
          extensions={[loadLanguage("html")]}
          onChange={onChange}
        />
      </div>
      <div className="flex-[0.1] w-full flex items-center justify-between mb-2">
        <div className="flex items-center gap-6">
          <button className="flex items-center bg-[#CED6E1] text-[#364153] px-3 py-1 rounded-xl text-sm font-semibold">
            <p>HTML</p>
            <Image src={dropIcon} alt="drop icon" width={20} height={20} />
          </button>
          <button className="flex items-center bg-[#CED6E1] text-[#364153] px-3 py-1 rounded-xl text-sm font-semibold">
            <p>Light</p>
            <Image src={dropIcon} alt="drop icon" width={20} height={20} />
          </button>
        </div>
        <div>
          <button className="bg-[#406AFF] rounded-3xl px-6 py-2 flex items-center gap-2 text-white text-2xl">
            <Image src={shareIcon} alt="drop icon" width={20} height={20} />
            <p>Share</p>
          </button>
        </div>
      </div>
    </div>
  );
}

const code = `
<html>
  <head>
    <title>HTML Sample</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <style type="text/css">
      h1 {
        color: #CCA3A3;
      }
    </style>
    <script type="text/javascript">
      alert("I am a sample... visit devChallengs.io for more projects");
    </script>
  </head>
  <body>
    <h1>Heading No.1</h1>
    <input disabled type="button" value="Click me" />
  </body>
</html>
`;
