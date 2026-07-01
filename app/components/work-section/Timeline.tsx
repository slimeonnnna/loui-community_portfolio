"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/company1.png",
    jobTitle: "SEO 策略师 / 增长顾问",
    company: "MOTAWILL",
    jobType: "增长合伙人",
    duration: "2025 - 至今",
    stuffIDid: [
      "从0到1构建全站SEO策略，覆盖技术审计、关键词规划与内容策略",
      "实施GEO/AEO优化，提升品牌在ChatGPT、Perplexity、Gemini等AI引擎中的可见性",
      "通过CRO与着陆页优化，B2B询盘转化率提升88%",
      "利用AI Agent自动化内容编排与API调用，提升内容生产效率",
      "多市场国际化SEO策略（尼日利亚、乌干达等），实现流量与询盘的快速增长",
    ],
  },
  {
    companyImg: "/company1.png",
    jobTitle: "技术 SEO 顾问",
    company: "TYCORUN",
    jobType: "深度合作",
    duration: "2023 - 至今",
    stuffIDid: [
      "负责Shopify电商站点的技术SEO架构搭建与优化",
      "实施落页面结构化数据与站点速度优化，提升Google搜索可见性",
      "执行技术SEO审计，解决索引、爬虫与Core Web Vitals问题",
      "制定关键词策略与内容优化方案，推动自然搜索流量增长",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> 工作经历</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-gradient-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
