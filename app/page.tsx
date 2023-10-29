import AppTitle from "@/components/atoms/AppTitle/AppTitle";
import SearchBar from "@/components/atoms/SearchBar/SearchBar";
import SingleLinks, { LinkItem } from "@/components/atoms/SingleLinks/SingleLinks";
import JobsSlider, { JobItem } from "@/components/atoms/JobsSlider/JobsSlider";

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
      <AppTitle />
      <SearchBar />
      <SingleLinks title="おすすめキーワードで探す" link={keyword} />

      <h3>開発言語・環境でフリーランス求人・案件を探す</h3>
      <SingleLinks title="開発言語" link={language} />
      <SingleLinks title="フレームワーク" link={language} />
      <SingleLinks title="インフラ" link={language} />
      <SingleLinks title="デザイン" link={language} />
      <SingleLinks title="その他" link={language} />

      <h3>勤務地でフリーランス求人・案件を探す</h3>
      <SingleLinks title="北海道" link={language} />
      <SingleLinks title="東北" link={language} />
      <SingleLinks title="関東" link={language} />
      <SingleLinks title="中部" link={language} />
      <SingleLinks title="近畿" link={language} />
      <SingleLinks title="中国" link={language} />
      <SingleLinks title="四国" link={language} />
      <SingleLinks title="九州" link={language} />
      <SingleLinks title="沖縄" link={language} />

      <h3>新着フリーランス求人・案件</h3>
      <div className="jobs">
        <JobsSlider jobOpenings={newJobs} />
      </div>
    </div>
  );
};

export default Home;
