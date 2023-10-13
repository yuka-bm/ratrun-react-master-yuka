"use client";
import "./page.scss";
import { useState } from 'react';
import envelope from "@/assets/svg/envelope.svg";
import BasicInput from "@/components/atoms/BasicInput/BasicInput";
import BasicButton from "@/components/atoms/BasicButton/BasicButton";

const Registration: React.FC = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (data: { name: string; value: string }) => {
    setUser({ ...user, [data.name]: data.value });
  };

  return (
    <div className="registration">
      <h2>新規会員登録</h2>
      <div className="container">
        <BasicInput label="メールアドレス" type="email" name="email" placeholder="taro.tanaka@freelance-start.com" value={user.email} inputValue={handleInput} />
        <BasicInput label="パスワード" type="password" name="password" placeholder="パスワード(半角英数6文字以上)" value={user.password}  isHide={true} inputValue={handleInput} />
      </div>

      <BasicButton type="submit" name="reg-button" image={envelope} value="同意して新規登録する(無料)" />
    </div>
  );
};

export default Registration;
