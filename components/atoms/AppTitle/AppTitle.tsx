import "./AppTitle.scss";
import Image from "next/image";

const AppTitle: React.FC = () => {
  return (
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
  );
};

export default AppTitle;
