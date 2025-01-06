import React from "react";
import * as TablerIcons from "@tabler/icons-react";

type IconProps = {
  name: keyof typeof TablerIcons;
  size?: number;
  color?: string;
  className?: string;
};

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "currentColor",
  className,
}) => {
  const IconComponent = TablerIcons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" does not exist in Tabler Icons.`);
    return null;
  }

  return <IconComponent size={size} color={color} className={className} />;
};

export default Icon;
