
import { IconCloud } from "@/components/magicui/icon-cloud";
import Image from "next/image";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Link from "next/link";
import Footer from "@/components/footer";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { HyperText } from "@/components/magicui/hyper-text";
import { ShineBorder } from "@/components/magicui/shine-border";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Facebook, Instagram, Github } from "lucide-react";
import { FaDiscord } from "react-icons/fa6";

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

export default function Social() {
    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
    );

    return (
        <div data-aos="fade-up" className="relative">
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
                <SparklesText
                    className="text-4xl md:text-4xl p-2 font-bold mb-2 mt-20 md:mt-25 text-center"
                >
                    Social Media
                </SparklesText>
                <HyperText className="text-base md:text-lg text-white py-4 mt-2 text-center">
                Suphason Keawbuadee
                </HyperText>
                <div className="w-full max-w-80 md:max-w-md h-full rounded-4xl bg-slate-300/10 backdrop-blur-lg p-4 md:p-6 mt-4">
                    <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                    <div className="flex flex-col items-center text-center">
                        <Link
                            href={"https://www.facebook.com/profile.php?id=61562046075913"}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <RainbowButton className="mt-2 w-full max-w-xs min-w-[220px] hover:text-[#0866FF]">
                                <Facebook className="mr-2" />
                                Facebook
                            </RainbowButton>
                        </Link>
                        <Link
                            href={"https://www.instagram.com/sinnakup/"}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <RainbowButton className="mt-2 w-full max-w-xs min-w-[220px] hover:text-[#FF0069]">
                                <Instagram className="mr-2" />
                                Instagram
                            </RainbowButton>
                        </Link>
                        <Link
                            href={"http://github.com/sildev13"}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <RainbowButton className="mt-2 w-full max-w-xs min-w-[220px] hover:text-slate-500">
                                <Github className="mr-2" />
                                GitHub
                            </RainbowButton>
                        </Link>
                        <Link
                            href={"https://discord.gg/2544"}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <RainbowButton className="mt-2 w-full max-w-xs min-w-[220px] hover:text-[#5865F2]">
                                <FaDiscord className="mr-2 h-6 w-6" />
                                Discord
                            </RainbowButton>
                        </Link>
                        <Link href={"/"}>
                            <InteractiveHoverButton className="mt-2 w-full mb-4 max-w-xs">
                                Back To Home
                            </InteractiveHoverButton>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
