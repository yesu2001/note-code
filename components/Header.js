import Image from "next/image";
import logo from "../assets/NoteCodeLogo.svg";

export default function Header() {
  return (
    <div className="top-10 space-y-6 text-center flex flex-col items-center">
      <Image src={logo} alt="logo" width={130} height={60} />
      <p className="text-[121826] text-lg md:text-2xl font-bold ">
        Create & Share
      </p>
      <p className="text-[121826] text-xl md:text-5xl font-bold">
        Your Code easily
      </p>
    </div>
  );
}
