import React from "react";
import {
  SiDotnet,
  SiLaravel,
  SiNestjs,
  SiNextdotjs,
  SiAngular,
  SiFlutter,
  SiMicrosoftazure,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiAmazonaws,
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiMicrosoftsqlserver,
  SiMysql,
  SiRabbitmq,
} from "react-icons/si";

interface TechIconProps {
  size?: number;
  className?: string;
}

const techIcons = [
  { Component: SiDotnet, color: "text-purple-500" },
  { Component: SiLaravel, color: "text-red-500" },
  { Component: SiNestjs, color: "text-red-600" },
  { Component: SiNodedotjs, color: "text-green-500" },
  { Component: SiNextdotjs, color: "text-white" },
  { Component: SiReact, color: "text-blue-400" },
  { Component: SiAngular, color: "text-red-600" },
  { Component: SiFlutter, color: "text-blue-500" },
  { Component: SiFirebase, color: "text-blue-500" },
  { Component: SiMicrosoftazure, color: "text-blue-600" },
  { Component: SiDocker, color: "text-blue-400" },
  { Component: SiMicrosoftsqlserver, color: "text-blue-600" },
  { Component: SiAmazonaws, color: "text-yellow-500" },
  { Component: SiPostgresql, color: "text-blue-500" },
  { Component: SiMysql, color: "text-blue-600" },
  { Component: SiMongodb, color: "text-green-500" },
  { Component: SiRedis, color: "text-red-600" },
  { Component: SiRabbitmq, color: "text-orange-500" },
];

const TechIcons: React.FC<TechIconProps> = ({ size = 40, className = "" }) => {
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-8">
      {techIcons.map((icon, index) => {
        const IconComponent = icon.Component;
        return (
          <IconComponent
            key={index}
            size={size}
            className={`${icon.color} ${className}`}
          />
        );
      })}
    </div>
  );
};

export default TechIcons;
