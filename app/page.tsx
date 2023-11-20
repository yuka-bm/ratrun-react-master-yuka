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

  const framework: LinkItem[] = [
    { name: "Node.js", url: "#" },
    { name: "CakePHP", url: "#" },
    { name: "Rails", url: "#" },
    { name: "Spring", url: "#" },
    { name: "flask", url: "#" },
    { name: "Vue.js", url: "#" },
    { name: "React", url: "#" },
    { name: "SpringBoot", url: "#" },
  ];

  const infrastructure: LinkItem[] = [
    { name: "AWS", url: "#" },
    { name: "GCP", url: "#" },
    { name: "LINUX", url: "#" },
    { name: "Azure", url: "#" },
  ];

  const design: LinkItem[] = [
    { name: "Photoshop", url: "#" },
    { name: "illustrator", url: "#" },
    { name: "Adobe XD", url: "#" },
    { name: "figma", url: "#" },
  ];

  const others: LinkItem[] = [
    { name: "SAP", url: "#" },
    { name: "Salesforce", url: "#" },
    { name: "ファイヤウォール", url: "#" },
    { name: "Exchange", url: "#" },
  ];

  interface RegionData {
    regionName: string;
    prefectures: LinkItem[];
  }

  const regionData: RegionData[] = [
    {
      regionName: "北海道",
      prefectures: [
        { name: "北海道", url: "#" },
      ],
    },
    {
      regionName: "東北",
      prefectures: [
        { name: "青森県", url: "#" },
        { name: "岩手県", url: "#" },
        { name: "宮城県", url: "#" },
        { name: "秋田県", url: "#" },
        { name: "山形県", url: "#" },
        { name: "福島県", url: "#" },
      ],
    },
    {
      regionName: "関東",
      prefectures: [
        { name: "茨城県", url: "#" },
        { name: "栃木県", url: "#" },
        { name: "群馬県", url: "#" },
        { name: "埼玉県", url: "#" },
        { name: "千葉県", url: "#" },
        { name: "東京都", url: "#" },
        { name: "神奈川県", url: "#" },
      ],
    },
    {
      regionName: "中部",
      prefectures: [
        { name: "新潟県", url: "#" },
        { name: "富山県", url: "#" },
        { name: "石川県", url: "#" },
        { name: "福井県", url: "#" },
        { name: "山梨県", url: "#" },
        { name: "長野県", url: "#" },
        { name: "岐阜県", url: "#" },
        { name: "静岡県", url: "#" },
        { name: "愛知県", url: "#" },
      ],
    },
    {
      regionName: "近畿",
      prefectures: [
        { name: "三重県", url: "#" },
        { name: "滋賀県", url: "#" },
        { name: "京都府", url: "#" },
        { name: "兵庫県", url: "#" },
        { name: "奈良県", url: "#" },
        { name: "和歌山県", url: "#" },
        { name: "大阪府", url: "#" },
      ],
    },
    {
      regionName: "中国",
      prefectures: [
        { name: "鳥取県", url: "#" },
        { name: "島根県", url: "#" },
        { name: "岡山県", url: "#" },
        { name: "広島県", url: "#" },
        { name: "山口県", url: "#" },
      ],
    },
    {
      regionName: "四国",
      prefectures: [
        { name: "徳島県", url: "#" },
        { name: "香川県", url: "#" },
        { name: "愛媛県", url: "#" },
        { name: "高知県", url: "#" },
      ],
    },
    {
      regionName: "九州",
      prefectures: [
        { name: "福岡県", url: "#" },
        { name: "佐賀県", url: "#" },
        { name: "長崎県", url: "#" },
        { name: "熊本県", url: "#" },
        { name: "大分県", url: "#" },
        { name: "宮城県", url: "#" },
        { name: "鹿児島県", url: "#" },
      ],
    },
    {
      regionName: "沖縄",
      prefectures: [
        { name: "沖縄県", url: "#" },
      ],
    },
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
      <SingleLinks link={framework} />
      <h4>インフラ</h4>
      <SingleLinks link={infrastructure} />
      <h4>デザイン</h4>
      <SingleLinks link={design} />
      <h4>その他</h4>
      <SingleLinks link={others} />

      <h3>勤務地でフリーランス求人・案件を探す</h3>
      {regionData.map((region, index) => (
        <div key={index}>
          <h4>{region.regionName}</h4>
          <SingleLinks link={region.prefectures} />
         </div>
      ))}

      <h3>新着フリーランス求人・案件</h3>
      <div className="jobs">
        <JobsSlider jobOpenings={newJobs} />
      </div>
    </div>
  );
};

export default Home;
