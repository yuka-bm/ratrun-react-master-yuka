"use client";
import "./page.scss";
import { useState } from 'react';
import envelope from "@/assets/svg/envelope.svg";
import BasicInput from "@/components/atoms/BasicInput/BasicInput";
import BasicButton from "@/components/atoms/BasicButton/BasicButton";

const Login: React.FC = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (data: { name: string; value: string }) => {
    setUser({ ...user, [data.name]: data.value });
  };

  return (
    <div className="login">
      <h2>ログイン</h2>
      <div className="container">
        <BasicInput label="メールアドレス" type="email" name="email" placeholder="taro.tanaka@freelance-start.com" value={user.email} inputValue={handleInput} />
        <BasicInput label="パスワード" type="password" name="password" placeholder="パスワード(半角英数6文字以上)" value={user.password}  isHide={true} inputValue={handleInput} />
        <a href="">パスワードを忘れた方はこちら</a>
      </div>

      <BasicButton type="submit" name="login-button" image={envelope} value="メールアドレスでログインする" />
    </div>
  );
};

export default Login;
