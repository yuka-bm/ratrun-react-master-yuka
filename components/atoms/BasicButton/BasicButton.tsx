import "./BasicButton.scss";
import Image from "next/image";

interface BasicButtonProps {
  type: "button" | "submit" | "reset";
  name: string;
  image: string;
  value: string;
}

const BasicButton: React.FC<BasicButtonProps> = ({ type, name, image, value }) => {

  return (
    <div className="basic_button">
      <button type={type} className={name} id={name}>
        <Image src={image} alt="" /> {value}
      </button>
    </div>
  );
};

export default BasicButton;