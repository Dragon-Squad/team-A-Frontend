import React from "react";

interface LogoProps {
  type: "logo1" | "logo2" | "logo3" | "logo4";
  width: string | number;
  height: string | number;
}

const Logo: React.FC<LogoProps> = ({ type, width, height }) => {
  const renderLogo = () => {
    switch (type) {
      case "logo1":
        return (
          <img
            src="/public/img/Logo_black.png"
            alt="Black logo with text"
            style={{ width: width, height: height }}
          />
        );
      case "logo2":
        return (
          <img
            src="/public/img/Logo_no_text_black.png"
            alt="Black logo with no text"
            style={{ width: width, height: height }}
          />
        );
      case "logo3":
        return (
          <img
            src="/public/img/Logo_no_text_white.png"
            alt="White logo with no text"
            style={{ width: width, height: height }}
          />
        );
      case "logo4":
        return (
          <img
            src="/public/img/Logo_white.png"
            alt="White logo with text"
            style={{ width: width, height: height }}
          />
        );
      default:
        return (
          <img
            src="/public/img/Logo_white.png"
            alt="Fallback logo using white logo with text"
            style={{ width: width, height: height }}
          />
        );
    }
  };

  return <>{renderLogo()}</>;
};

export default Logo;
