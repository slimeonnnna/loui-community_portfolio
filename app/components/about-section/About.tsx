import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";

const syne = Syne({ subsets: ["latin"] });

const skillsData = [
  {
    title: "SEO 与策略",
    items: ["SEO 策略、技术审计", "生成式 / 答案引擎优化（ChatGPT、Perplexity、Gemini、Claude）"],
  },
  {
    title: "GEO/AEO / AI 搜索",
    items: ["区域化策略与 AI 引擎可见性优化"],
  },
  {
    title: "平台与电商",
    items: ["WordPress：主题架构、页面与内容优化、站点搭建与上线", "Shopify：店铺搭建、SEO 集成、产品页优化"],
  },
  {
    title: "内容与关键词",
    items: ["内容策略、关键词规划", "AI 辅助内容生成与片段/答案优化"],
  },
  {
    title: "AI Agent 辅助工作流",
    items: ["使用 AI agent 自动生成与编排任务（自动化脚本生成、API 调用编排、数据采集/分析辅助、模板化改动与部署建议）"],
  },
  {
    title: "分析与转化",
    items: ["Google Search Console 分析、GA4", "Ahrefs / SEMrush 支持的数据驱动优化", "CRO 与着陆页/询盘优化（B2B 询盘转化 88%）"],
  },
  {
    title: "数字营销",
    items: ["内容营销与社媒增长"],
  },
  {
    title: "工具与技术栈",
    items: ["Google Search Console、SEMrush、Claude、Cline、Cursor、VS Code", "Python、JavaScript、LLMs API（用于分析与 AI agent 集成）"],
  },
  {
    title: "案例驱动能力",
    items: ["0→1 品牌建立、多市场国际化、快速增长（流量/曝光/线索提升）"],
  },
  {
    title: "交付与战略",
    items: ["全面 SEO 审计、路线图制定、季度策略规划"],
  },
];

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        我的故事
      </AnimatedTitle>

      <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-lg md:text-xl mt-8 leading-[34px] md:leading-[39px]">
        <AnimatedBody>
          最早我在阿里国际站学习店铺运营，扎扎实实做了半年基础功，直到公司人员变动，有运营经验的我被安排到了独立站SEO的岗位上。是的，一开始并不是我主动选择，更像是被推着上路的。
        </AnimatedBody>
        <AnimatedBody>
          我负责了一部分代运营的相关工作，这是很好的积攒经验的工作，跟着团队学习下，所有合同的顺利交付，所有指定关键词也成功进入首页Top10，自己也得到了领导的肯定和嘉奖，获得了首次除工资以外的奖金。
        </AnimatedBody>
        <AnimatedBody>
          后面我明白，从0开始的人，更需要靠实际产出去证明自己的价值。自那时起我从不推脱领导给的任务，并且执行过程中不断反思不断优化效率，为着成为不可替代的那个人。
        </AnimatedBody>
        <AnimatedBody>
          于是，我多次反复查看公司的各大运营站点，包括WP站点和Shopify站点。随着不断观察，我逐渐理解公司的业务和产品知识，最关键的是，多个建站时期遗留的问题被我找到。于是我制作报告反馈给领导，在领导的同意下，我有了更多的实践优化机会。
        </AnimatedBody>
        <AnimatedBody>
          我坚定了自己信念：我渴望得到个人成长的机会，拓展自己的SEO技能。
        </AnimatedBody>
        <AnimatedBody>
          随着技能发展，我先后在2年内，成功落地了超过5个0-1的品牌站点，同时接管了公司大部分独立站，负责SEO内容审查和技术SEO维护。
        </AnimatedBody>
        <AnimatedBody>
          后来我开始尝试用AI Agent辅助日常的重复性工作，理解并学习IDE和AI如何协同。运用之下，帮我省下不少时间，也是从那时起，我购买AI API用于搭建属于自己的AI Agent，同时也拷贝多个开源优质项目，优化工作流同时，积累实践经验。
        </AnimatedBody>
        <AnimatedBody>
          我明白局限性，所以我热衷于探索，我关注各大头部品牌以及竞对动态，研究头部品牌的打法，能学到很多自己平时想不到的思路。而对于竞对站点，则是一个查漏补缺的过程。
        </AnimatedBody>
        <AnimatedBody>
          我很感谢我的公司，因此我目前还在职，这段经历我很珍惜，也仍在继续。
        </AnimatedBody>
      </div>

      <div className="mt-16 md:mt-[120px]">
        <AnimatedTitle
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
          className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
        >
          技能树 · 能力图谱
        </AnimatedTitle>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
          {skillsData.map((skillGroup, index) => (
            <div key={index}>
              <AnimatedTitle
                wordSpace={"mr-[0.5ch]"}
                charSpace={"mr-[0.001em]"}
                className="font-bold antialiased text-xl md:text-2xl mb-2"
              >
                {skillGroup.title}
              </AnimatedTitle>
              {skillGroup.items.map((item, i) => (
                <AnimatedBody key={i} className="text-white/60 text-base md:text-xl leading-8">
                  • {item}
                </AnimatedBody>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}