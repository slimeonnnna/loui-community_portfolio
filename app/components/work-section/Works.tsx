import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "MOTAWILL — 全站 SEO 策略与增长",
      gitLink: "https://github.com/your_username/motawill-seo",
      liveLink: "https://motawill.com",
      about:
        "从0到1构建全站SEO策略，覆盖多市场国际化（尼日利亚、乌干达等）。通过技术审计、内容策略与AI搜索优化，实现流量/曝光/线索的快速增长。集成GEO/AEO优化，提升在AI引擎中的可见性。",
      stack: ["SEO策略", "技术审计", "AI搜索优化", "内容策略", "WordPress"],
      img: "/motawill-website.png",
    },
    {
      title: "TYCORUN — Shopify 电商 SEO 增长",
      gitLink: "https://github.com/your_username/tycorun-seo",
      liveLink: "https://www.tycorun.com",
      about:
        "为TYCORUN（电池更换公司品牌）提供Shopify电商SEO全案服务，涵盖Shopify店铺SEO架构搭建、产品页面优化、结构化数据实施与关键词策略。通过数据驱动优化，显著提升自然搜索流量与B2B询盘转化。",
      stack: ["Shopify", "电商SEO", "结构化数据", "关键词策略", "GA4"],
      img: "/tycorun.png",
    },
    {
      title: "JOEYOUNG — 制造业独立站 SEO",
      gitLink: "https://github.com/your_username/joeyoung-seo",
      liveLink: "https://www.solarinvertermanufacturers.com",
      about:
        "为JOEYOUNG（太阳能逆变器制造商）提供独立站SEO策略,包括0-1品牌落地，技术SEO审计、工业品类关键词规划、多语言内容策略与站外优化。帮助制造业品牌拓展海外搜索可见性。",
      stack: ["技术SEO", "工业品关键词", "制造业外贸", "多语言SEO", "内容策略"],
      img: "/JOEYOUNG.png",
    },
    {
      title: "BENLG / SAMEBIKE / HUNTKEY 等多品牌代运营经验",
      about:
        "为BENLG、SAMEBIKE、HUNTKEY等多个品牌提供SEO代运营服务。涵盖独立站与电商平台优化，多品牌关键词矩阵搭建，内容策略批量输出，以及跨品牌数据分析与策略调整。",
      stack: ["多品牌运营", "B2B-SEO", "内容批量策略", "数据分析", "CRO"],
      img: "/samebike.png",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    setSectionInView("work", inView);
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>项目经历</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}