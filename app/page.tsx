import "./page.scss";
import SearchBar from "@/components/atoms/Forms/SearchForm";
import SingleLinks, { LinkItem } from "@/components/atoms/Links/SingleLinks";
import JobsSlider, { JobItem } from "@/components/atoms/Sliders/JobsSlider";
import Image from "next/image";

const Home: React.FC = () => {

  const keyword: LinkItem[] = [
    { name: "java", url: "#" },
    { name: "vue.js", url: "#" },
    { name: "React", url: "#" },
    { name: "Python", url: "#" },
  ];

  const language: LinkItem[] = [
    { name: "java", url: "#" },
    { name: "PHP", url: "#" },
    { name: "Python", url: "#" },
    { name: "Ruby", url: "#" },
    { name: "Go", url: "#" },
    { name: "JavaScript", url: "#" },
    { name: "TypeScript", url: "#" },
    { name: "C言語", url: "#" },
    { name: "C#", url: "#" },
    { name: "C++", url: "#" },
  ];

  const newJobs: JobItem[] = [
    { title: "リモートワーク1", price: 50, unit: "万円/月額", type: "業務委託", location: "東京 ", language: "React" },
    { title: "リモートワーク2", price: 50, unit: "万円/月額", type: "業務委託", location: "東京 ", language: "React" },
    { title: "リモートワーク3", price: 50, unit: "万円/月額", type: "業務委託", location: "東京 ", language: "React" },
  ];

  return (
    <div className="top">
      <div className="app-title">
        <div className="title">
          <div className="logo-area">
              <Image src={require("@/assets/img/rocket.png")} alt="rocket" />
          </div>
          <h1>&nbsp;フリーランススタート</h1>
        </div>
        <p>案件・求人数 XXX 件 (YYYY/MM/DD 更新)</p>
        <p>フリーランスエンジニア専用のIT求人・案件検索サイトで仕事探し</p>
      </div>

      <SearchBar />
      <h4>おすすめキーワードで探す</h4>
      <SingleLinks link={keyword} />

      <h3>開発言語・環境でフリーランス求人・案件を探す</h3>
      
      <h4>開発言語</h4>
      <SingleLinks link={language} />
      <h4>フレームワーク</h4>
      <SingleLinks link={language} />
      <h4>インフラ</h4>
      <SingleLinks link={language} />
      <h4>デザイン</h4>
      <SingleLinks link={language} />
      <h4>その他</h4>
      <SingleLinks link={language} />

      <h3>勤務地でフリーランス求人・案件を探す</h3>
      <h4>北海道</h4>
      <SingleLinks link={language} />
      <h4>東北</h4>
      <SingleLinks link={language} />
      <h4>関東</h4>
      <SingleLinks link={language} />
      <h4>中部</h4>
      <SingleLinks link={language} />
      <h4>近畿</h4>
      <SingleLinks link={language} />
      <h4>中国</h4>
      <SingleLinks link={language} />
      <h4>四国</h4>
      <SingleLinks link={language} />
      <h4>九州</h4>
      <SingleLinks link={language} />
      <h4>沖縄</h4>
      <SingleLinks link={language} />

      <h3>新着フリーランス求人・案件</h3>
      <div className="jobs">
        <JobsSlider jobOpenings={newJobs} />
      </div>
    </div>
  );
};

export default Home;
