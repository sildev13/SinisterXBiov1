import { IconCloud } from "@/components/magicui/icon-cloud";
import Image from "next/image";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Link from "next/link";
import Footer from "@/components/footer"
import { SparklesText } from "@/components/magicui/sparkles-text";
import { HyperText } from "@/components/magicui/hyper-text";
import { ShineBorder } from "@/components/magicui/shine-border";
import { RainbowButton } from "@/components/magicui/rainbow-button";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "amazonaws",
  "firebase",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "mongodb",
  "macos",
  "ubuntu",
  "wordpress",
  "apache",
];

export default function Home() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col items-center w-full pt-1 md:pt-2 relative">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-0 w-[180px] h-[180px] flex justify-center items-center">
          <IconCloud images={images} />
        </div>
        <div className="relative z-30 top-10">
          <Image
            src="/g.png"
            alt="Logo"
            width={130}
            height={130}
            className="rounded-full object-cover aspect-square border-[2px] border-solid border-[white] p-[2px] [transition:0.3s] hover:border-[black]"
          />
        </div>
        <SparklesText className="text-4xl md:text-4xl p-2 font-bold mb-2 mt-20 md:mt-22 text-center">Welcome to My Bio</SparklesText>
        <HyperText className="text-base md:text-lg text-white py-4 mt-2 text-center">Suphason Keawbuadee</HyperText>
        <div className="w-full max-w-80 md:max-w-md h-full rounded-4xl bg-slate-300/10 backdrop-blur-lg p-4 md:p-6 mt-4">
        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
          <div className="flex flex-col items-center text-center">
            <Link href={"https://suphason.space"} target="_blank" rel="noopener noreferrer">
              <InteractiveHoverButton className="mt-4 w-full max-w-xs min-w-[220px] text-emerald-500">Main Website</InteractiveHoverButton>
            </Link>
            <Link href={"https://status.suphason.space"} target="_blank" rel="noopener noreferrer">
              <InteractiveHoverButton className="mt-2 w-full max-w-xs min-w-[220px] text-red-500">Status</InteractiveHoverButton>
            </Link>
            <Link href={"/project"}>
              <InteractiveHoverButton className="mt-2 w-full max-w-xs min-w-[220px]">My Projects</InteractiveHoverButton>
            </Link>
            <Link href={"/link"}>
              <InteractiveHoverButton className="mt-2 w-full max-w-xs min-w-[220px]">My Link</InteractiveHoverButton>
            </Link>
            <Link href={"/social"}>
              <InteractiveHoverButton className="mt-2 w-full max-w-xs min-w-[220px]">My Social</InteractiveHoverButton>
            </Link>
            <Link href={"/accessory"}>
              <InteractiveHoverButton className="mt-2 w-full max-w-xs min-w-[220px]">My Accessory</InteractiveHoverButton>
            </Link>

            <Link href={"https://ezdn.app/SinGod"} target="_blank" rel="noopener noreferrer">
              <RainbowButton className="mt-2 w-full max-w-xs min-w-[220px] text-blue-400 hover:text-white">
                <Image src="/ezdn.png" alt="Easy Donate" width={24} height={24} className="mr-2" />
                Donate Me
              </RainbowButton>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
