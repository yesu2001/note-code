import Image from "next/image";
import bgImage from "../../assets/Hero-Background-notecode.svg";
import Header from "@/components/Header";
import ShareEditor from "@/components/ShareEditor";

export default function page({ params }) {
  return (
    <main className="w-full flex h-full flex-col items-center justify-between">
      <Image
        src={bgImage}
        alt="background image"
        width={100}
        height={100}
        className="absolute top-0 h-full w-full object-cover object-center"
      />
      <div className="z-50 my-8">
        <Header />
        <ShareEditor codeId={params.id} />
      </div>
    </main>
  );
}
