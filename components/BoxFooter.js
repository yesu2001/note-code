import React, { useCallback, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { loadLanguage, langs } from "@uiw/codemirror-extensions-langs";
import dropIcon from "../assets/down arrow.svg";
import shareIcon from "../assets/Share.svg";
import {
  code,
  themeOptions,
  langOptions,
  generateUniqueId,
} from "../constants";
import { useRouter } from "next/navigation";
import DropDown from "./DropDown";
export default function BoxFooter({ theme, lang, setLang, setTheme }) {
  const { push } = useRouter();
  const [openTheme, setOpenTheme] = useState(false);
  const [openLang, setOpenLang] = useState(false);

  const handleOpenTheme = () => setOpenTheme(!openTheme);

  const handleOpenLang = () => setOpenLang(!openLang);

  const handleSelectTheme = (value) => {
    setTheme(value);
    handleOpenTheme();
  };

  const handleSelectLang = (value) => {
    setLang(value);
    handleOpenLang();
  };

  const handleShare = () => {
    const uid = generateUniqueId();
    console.log("dfsdfsdf");
    const dataObject = {
      code: `<h1>sdfsdf</h1>`,
    };
    axios
      .post(`http://localhost:3000/api/codepush/${uid}`, dataObject)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    push(`/${uid}`);
  };

  return (
    <div className="flex-[0.1] w-full flex items-center justify-between mb-2">
      <div className="flex items-center gap-6">
        <div className="relative">
          <button
            className="flex items-center bg-[#CED6E1] text-[#364153] px-3 py-1 rounded-xl text-sm font-semibold"
            onClick={handleOpenLang}
          >
            <p>{lang.label}</p>
            <Image src={dropIcon} alt="drop icon" width={20} height={20} />
          </button>
          {openLang && (
            <DropDown
              options={langOptions}
              option={"lang"}
              handleOptionClick={handleSelectLang}
            />
          )}
        </div>
        <div className="relative">
          <button
            className="flex items-center bg-[#CED6E1] text-[#364153] px-3 py-1 rounded-xl text-sm font-semibold"
            onClick={handleOpenTheme}
          >
            <p>{theme.label}</p>
            <Image src={dropIcon} alt="drop icon" width={20} height={20} />
          </button>
          {openTheme && (
            <DropDown
              options={themeOptions}
              option={"theme"}
              handleOptionClick={handleSelectTheme}
            />
          )}
        </div>
      </div>
      <div>
        <button
          className="bg-[#406AFF] rounded-3xl px-6 py-2 flex items-center gap-2 text-white text-2xl"
          onClick={handleShare}
        >
          <Image src={shareIcon} alt="drop icon" width={20} height={20} />
          <p>Share</p>
        </button>
      </div>
    </div>
  );
}
