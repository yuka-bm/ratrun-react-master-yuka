"use client";
import "./page.scss";
import envelope from "@/assets/svg/envelope.svg";
import BasicInput from "@/components/atoms/BasicInput/BasicInput";
import BasicButton from "@/components/atoms/BasicButton/BasicButton";

const Registration: React.FC = () => {

  return (
    <div className="registration">
      <h2>新規会員登録</h2>
      <div className="container">
        <BasicInput label="メールアドレス" type="email" name="email" placeholder="taro.tanaka@freelance-start.com" value="" isHide={true}  />
        <BasicInput label="パスワード" type="password" name="password" placeholder="パスワード(半角英数6文字以上)" value=""  isHide={false}  />
      </div>

      <BasicButton type="submit" name="reg-button" image={envelope} value="同意して新規登録する(無料)" />
    </div>
  );
};

export default Registration;
