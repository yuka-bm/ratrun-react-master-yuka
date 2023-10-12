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
  isHide?: boolean;
  inputValue?: (data: { name: string; value: string }) => void;
}

const BasicInput: React.FC<BasicInputProps> = ({ label, type, name, placeholder, value, isHide, inputValue }) => {

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (inputValue) {
      inputValue({ name, value: newValue });
    }
  };

  return (
    <div className="basic_input">
      <label htmlFor={name}>{label}</label>
      <input type={(isHide && passwordShown) ? "text" : type} name={name} id={name} placeholder={placeholder} value={value}  onChange={handleInputChange} />
      {isHide ? 
        (<span onClick={togglePassword} role="presentation" className="eye">
          {passwordShown ? <Image src={eye} alt="eye" /> : <Image src={slash} alt="/eye-slash" />}
        </span>
        ) : null
      }
    </div>
  );
};

export default BasicInput;