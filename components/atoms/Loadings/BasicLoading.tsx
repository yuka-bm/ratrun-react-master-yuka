import React from "react";
import Image from "next/image";
import loading from "@/assets/gif/loading.gif";
import "./BasicLoading.scss";

const LoadingOverlay: React.FC = () => {
  return (
    <div className="loading-overlay">
      <div className="overlay"></div>
      <Image
        src={loading}
        alt={""}
        width="64"
        height="64"
      />
    </div>
  );
};

export default LoadingOverlay;