import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import dropIcon from "../assets/down arrow.svg";
import shareIcon from "../assets/Share.svg";
import linkIcon from "../assets/link.svg";
import {
  code,
  themeOptions,
  langOptions,
  generateUniqueId,
} from "../constants";
import { useRouter } from "next/navigation";
import DropDown from "./DropDown";

export default function BoxFooter({
  theme,
  lang,
  setLang,
  setTheme,
  code,
  link,
}) {
  const { push } = useRouter();
  const [openTheme, setOpenTheme] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    console.log("Link updated:", link);
  }, [link]);

  const handleShare = () => {
    setLoading(true);
    const uid = generateUniqueId();
    const dataObject = {
      code_id: uid,
      code_text: code,
    };
    axios
      .post(`http://localhost:3000/api/codepush/${uid}`, dataObject)
      .then((response) => {
        const doc = response.data.doc;
      })
      .catch((error) => {
        console.error(error);
      });
    setLoading(false);
    push(`/${uid}`);
  };

  const handleCopy = (text) => {
    if (!navigator.clipboard) {
      // Fallback for older browsers:
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");

      document.body.removeChild(textArea);
    } else {
      // Modern approach using Clipboard API:
      navigator.clipboard
        .writeText(text)
        .then(() => {
          alert("Text copied to clipboard");
        })
        .catch((err) => {
          alert(
            "Sorry, your browser doesn't support copying text directly. Please use Ctrl+C to copy."
          );
        });
    }
  };

  return (
    <div className=" w-full flex flex-col md:flex-row items-center justify-between mb-2 space-y-3">
      <div className="relative flex items-center gap-6">
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
      <div className="flex flex-col md:flex-row items-center gap-4">
        {link && (
          <button
            className="flex items-center gap-2 text-[#364153] opacity-80 text-sm font-semibold"
            onClick={() => handleCopy(link)}
          >
            <Image src={linkIcon} alt="Link icon" width={25} height={25} />
            <p>{link}</p>
          </button>
        )}
        <button
          className="bg-[#406AFF] rounded-3xl px-6 py-2 flex items-center gap-2 text-white text-2xl"
          onClick={handleShare}
        >
          <Image src={shareIcon} alt="drop icon" width={20} height={20} />
          <p>{loading ? "Generating Link" : "Share"}</p>
        </button>
      </div>
    </div>
  );
}
