"use client";
import "./page.scss";
import Image from "next/image";
import { useState } from 'react';

const Registration: React.FC = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="registration">
      <h2>新規会員登録</h2>
      <div className="container">
        <label htmlFor="email" className="label">メールアドレス</label>
        <input type="email" name="email" id="email" className="input" autoFocus />
        <label htmlFor="password" className="label">パスワード</label>
        <div>
          <input type={passwordShown ? "text" : "password"} name="password" id="password" className="input" />
          <span onClick={togglePassword} role="presentation" className="eye">{passwordShown ? <Image src={require("@/assets/svg/eye.svg")} alt="eye" /> : <Image src={require("@/assets/svg/eye-slash.svg")} alt="/eye-slash" />}</span>
        </div>
      </div>
      <div className="register">
        <button type="submit" className="reg-button">
          <Image src={require("@/assets/svg/envelope.svg")} alt="envelope" /> 同意して新規登録する(無料)
        </button>
      </div>
    </div>
  );
};

export default Registration;
