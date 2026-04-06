import { Heart, Github, Facebook, Mail, Instagram  } from "lucide-react";
import Link from "next/link";

const Footer = () => (
    <footer className="w-full py-4 mt-8 flex flex-col items-center text-center text-white text-sm">
        <div className="flex gap-4 mb-2">
            <Link href="https://github.com/sildev13" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 hover:text-black transition" />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61562046075913" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 hover:text-blue-500 transition" />
            </Link>
            <Link href="https://www.instagram.com/sinnakup/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 hover:text-purple-500 transition" />
            </Link>
            <Link href="mailto:xmodnoy12@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail className="w-5 h-5 hover:text-red-400 transition" />
            </Link>
        </div>
        <span>© {new Date().getFullYear()} Suphason Keawbuadee. All rights reserved.</span>
        <span>
            Made with <span className="text-pink-500"><Heart className="w-4 h-4 inline hover:scale-120 transition-all duration-500" /></span> | 
            Powered by <a className="hover:text-slate-500" href="https://nextjs.org">Next.js</a> & <a className="hover:text-pink-400" href="https://magicui.design/">Magic UI</a>
        </span>
    </footer>
);

export default Footer;