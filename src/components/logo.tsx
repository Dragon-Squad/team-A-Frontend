import React from "react";

interface LogoProps {
  type: "logo1" | "logo2" | "logo3" | "logo4";
  size: string | number;
}

const Logo: React.FC<LogoProps> = ({ type, size }) => {
  const renderLogo = () => {
    const logoSize = typeof size === "number" ? `${size}px` : size;
    switch (type) {
      case "logo1":
        return (
          <img
            src="/public/img/Logo_black.png"
            alt="Black logo with text"
            style={{ width: logoSize, height: logoSize }}
          />
        );
      case "logo2":
        return (
          <img
            src="/public/img/Logo_no_text_black.png"
            alt="Black logo with no text"
            style={{ width: logoSize, height: logoSize }}
          />
        );
      case "logo3":
        return (
          <img
            src="/public/img/Logo_no_text_white.png"
            alt="White logo with no text"
            style={{ width: logoSize, height: logoSize }}
          />
        );
      case "logo4":
        return (
          <img
            src="/public/img/Logo_white.png"
            alt="White logo with text"
            style={{ width: logoSize, height: logoSize }}
          />
        );
      default:
        return (
          <img
            src="/public/img/Logo_white.png"
            alt="Fallback logo using white logo with text"
            style={{ width: logoSize, height: logoSize }}
          />
        );
    }
  };

  return <>{renderLogo()}</>;
};

export default Logo;
