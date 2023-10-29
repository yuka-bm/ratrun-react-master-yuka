"use client";
import "./SearchBar.scss";
import { useState } from 'react';
import BasicInput from "../BasicInput/BasicInput";
import BasicButton from "../BasicButton/BasicButton";

const SearchBar: React.FC = () => {
  const [input, setUser] = useState({
    search: "",
  });

  const handleInput = (data: { name: string; value: string }) => {
    setUser({ ...input, [data.name]: data.value });
  };

  const handleSubmit = async () => {
    try {
      // await postLogin(user);
      alert("案件を探す : " + input.search);
      // router.push("/login");
    } catch (error) {
      //
      alert("失敗しました。");
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <div className="layout">
          <div className="box">
            <BasicInput label="フリーワードで案件検索" type="text" name="search" placeholder="キーワードを入れて探す"  value={input.search} inputValue={handleInput} />
          </div>
          <BasicButton type="submit" name="search-button" image="" value="案件を検索" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
