"use client";
import React, { useEffect } from "react";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import AnimatedTitle from "../ui/AnimatedTitle";
import Link from "next/link";

const syne = Syne({ subsets: ["latin"] });

export default function Contact() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.25,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("contact");
  }, [inView, setSectionInView]);

  return (
    <>
      <section
        ref={ref}
        id="contact"
        className="card mt-12 sm:mt-16 md:mt-[100px] px-6 py-4 md:py-10 lg:py-12 rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f]"
      >
        <AnimatedTitle
          wordSpace={"mr-2 md:mr-[12px]"}
          charSpace={"mr-[0.001em]"}
          className="text-xl sm:text-2xl md:text-[32px] lg:text-[40px] font-bold inline"
        >
          和我联系？
        </AnimatedTitle>
        <a
          href="mailto:914394053@qq.com"
          className="text-xl sm:text-2xl md:text-[32px] lg:text-[40px] font-bold ml-3 underline underline-offset-4 decoration-white/40 hover:decoration-white transition-all cursor-pointer"
        >
          914394053@qq.com
        </a>
      </section>
    </>
  );
}