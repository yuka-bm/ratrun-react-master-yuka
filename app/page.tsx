"use client";
import "./page.scss";
import React, { useState, useEffect } from "react";
import SearchBar from "@/components/atoms/Forms/SearchForm";
import SingleLinks, { LinkItem } from "@/components/atoms/Links/SingleLinks";
import JobsSlider, { JobItem } from "@/components/atoms/Sliders/JobsSlider";
import Image from "next/image";
import rocket from "@/assets/img/rocket.png";
import {
  getJobInfo,
  getKeyword,
  getProgrammingLanguage,
  getPrefecture,
  getMatters,
} from "@/api/matters";
import dayjs from "dayjs";
import { BasicLoading } from "@/components/atoms/Loadings";

interface Environment {
  develops: LinkItem[];
  frameworks: LinkItem[];
  infrastructures: LinkItem[];
  designs: LinkItem[];
  others: LinkItem[];
}

interface Prefectures {
  id: number;
  name: string;
  area: string;
}
interface PrefecturesByArea {
  prefectures: LinkItem[];
  area: string;
}

const Home: React.FC = () => {

  const [jobCount, setJobCount] = useState(0);
  const [updateDate, setUpdateDate] = useState("");
  const [keywords, setKeywords] = useState<LinkItem[]>([]);
  const [environments, setEnvironment] = useState<Environment>({
    develops: [],
    frameworks: [],
    infrastructures: [],
    designs: [],
    others: [],
  });
  const [prefByArea, setPrefByArea] = useState<PrefecturesByArea[]>([]);
  const [matters, setMatters] = useState<JobItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const convPrefecturesByArea = (prefecturesData: Prefectures[]): PrefecturesByArea[] => {
    const groupedPrefectures: { [key: string]: LinkItem[] } = {};

    prefecturesData.forEach((prefecture) => {
      if (!groupedPrefectures[prefecture.area]) {
        groupedPrefectures[prefecture.area] = [];
      }
      groupedPrefectures[prefecture.area].push({
        name: prefecture.name,
        id: prefecture.id,
      });
    });

    const prefecturesByArea: PrefecturesByArea[] = Object.keys(groupedPrefectures).map((area) => {
      return {
        area,
        prefectures: groupedPrefectures[area],
      };
    });

    return prefecturesByArea;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // 総仕事数・更新日
        const jobInfo = await getJobInfo();
        setJobCount(jobInfo.total_count);
        setUpdateDate(dayjs(jobInfo.date).format("YYYY/MM/DD"));
        // キーワード
        setKeywords(await getKeyword());
        // 開発言語・環境
        const envData = await getProgrammingLanguage();
        setEnvironment({
          develops: envData.develops,
          frameworks: envData.frameworks,
          infrastructures: envData.infrastructures,
          designs: envData.designs,
          others: envData.others,
        });
        // 都道府県
        const prefectureData = await getPrefecture();
        setPrefByArea(convPrefecturesByArea(prefectureData));
        // 案件
        setMatters(await getMatters());
      }
      catch(e) {
        console.log(e);
      }
      finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="top">
      {isLoading && <BasicLoading />}
      <div className="app-title">
        <div className="title">
          <div className="logo-area">
              <Image src={rocket} alt="rocket" />
          </div>
          <h1>&nbsp;フリーランススタート</h1>
        </div>
        <p>案件・求人数 {jobCount}件 ({updateDate} 更新)</p>
        <p>フリーランスエンジニア専用のIT求人・案件検索サイトで仕事探し</p>
      </div>

      <SearchBar />
      <h4>おすすめキーワードで探す</h4>
      <SingleLinks link={keywords} />

      <h3>開発言語・環境でフリーランス求人・案件を探す</h3>
      
      <h4>開発言語</h4>
      <SingleLinks link={environments.develops} />
      <h4>フレームワーク</h4>
      <SingleLinks link={environments.frameworks} />
      <h4>インフラ</h4>
      <SingleLinks link={environments.infrastructures} />
      <h4>デザイン</h4>
      <SingleLinks link={environments.designs} />
      <h4>その他</h4>
      <SingleLinks link={environments.others} />

      <h3>勤務地でフリーランス求人・案件を探す</h3>
      {prefByArea.map((region, index) => (
        <div key={index}>
          <h4>{region.area}</h4>
          <SingleLinks link={region.prefectures} />
         </div>
      ))}

      <h3>新着フリーランス求人・案件</h3>
      <div className="jobs">
        <JobsSlider jobOpenings={matters} />
      </div>
    </div>
  );
};

export default Home;
