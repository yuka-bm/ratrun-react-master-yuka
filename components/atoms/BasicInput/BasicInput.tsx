import "./BasicInput.scss";
import { useState } from 'react';
import Image from "next/image";
import eye from "@/assets/svg/eye.svg";
import slash from "@/assets/svg/eye-slash.svg";

interface BasicInputProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  isHide: boolean;
}

const BasicInput: React.FC<BasicInputProps> = ({ label, type, name, placeholder, value, isHide }) => {

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="basic_input">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} placeholder={placeholder} value={value} />
      {isHide ? (
        <span onClick={togglePassword} role="presentation" className="eye">
          {passwordShown ? <Image src={eye} alt="eye" /> : <Image src={slash} alt="/eye-slash" />}
        </span>
      ) : null}
    </div>
  );
};

export default BasicInput;