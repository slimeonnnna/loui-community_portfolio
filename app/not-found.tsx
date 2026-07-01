import Link from "next/link";
import { Syne } from "next/font/google";
import Image from "next/image";

const syne = Syne({ subsets: ["latin"] });

function NotFound() {
  return (
    <main className="text-center space-y-6">
      <div className="grid grid-cols-20 md:flex gap-1 md:gap-4 pt-[40vh] pb-10 justify-center w-full text-center">
        <h1 className="text-xl col-span-17 md:text-7xl font-bold text-center">
          页面未找到
        </h1>
        <div className="relative col-span-3">
          <Image className="w-fit" src="/pnf.svg" fill alt="抱歉" />
        </div>
      </div>
      <Link
        href="/"
        className={`text-2xl font-semibold px-3 py-2 uppercase ${syne.className} hover:bg-white hover:text-[#08233b] duration-300 rounded-xl border-2 border-white leading-none`}
      >
        回到首页
      </Link>
    </main>
  );
}

export default NotFound;