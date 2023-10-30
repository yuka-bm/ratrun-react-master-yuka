import "./BasicButton.scss";
import Image from "next/image";

interface BasicButtonProps {
  type: "button" | "submit" | "reset";
  name: string;
  image: string;
  value: string;
  clickSubmit?: () => void;
}

const BasicButton: React.FC<BasicButtonProps> = ({ type, name, image, value, clickSubmit }) => {

  const handleClick = () => {
    if (clickSubmit) {
      clickSubmit();
    }
  };

  return (
    <div className="basic_button">
      <button type={type} className={name} id={name} onClick={handleClick}>
        <Image src={image} alt="" /> {value}
      </button>
    </div>
  );
};

export default BasicButton;