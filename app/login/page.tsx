"use client";
import "./page.scss";
import { useState } from 'react';
import envelope from "@/assets/svg/envelope.svg";
import BasicInput from "@/components/atoms/Inputs/BasicInput";
import BasicButton from "@/components/atoms/Buttons/BasicButton";
import { postLogin } from "@/api/user";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (data: { name: string; value: string }) => {
    setUser({ ...user, [data.name]: data.value });
  };

  const router = useRouter();
  const handleClickSubmit = async () => {
    try {
      await postLogin(user);
      alert("ログインに成功しました。画面を遷移します。");
      router.push("/login");
    } catch (error) {
      //
      alert("ログインに失敗しました。");
    }
  };

  return (
    <div className="login">
      <h2>ログイン</h2>
      <div className="container">
        <BasicInput label="メールアドレス" type="email" name="email" placeholder="taro.tanaka@freelance-start.com" value={user.email} inputValue={handleInput} />
        <BasicInput label="パスワード" type="password" name="password" placeholder="パスワード(半角英数6文字以上)" value={user.password}  isHide={true} inputValue={handleInput} />
        <a href="">パスワードを忘れた方はこちら</a>
      </div>

      <BasicButton type="submit" name="login-button" image={envelope} value="メールアドレスでログインする" clickSubmit={handleClickSubmit} />
    </div>
  );
};

export default Login;
