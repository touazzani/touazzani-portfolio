import React, { useState } from "react";
import TiltCard from "../components/TiltCard";
import {
  SiReact,
  SiGit,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiGithub,
  SiExpo,
  SiPython,
  SiNodedotjs,
  SiFirebase,
  SiPhp,
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "PHP", icon: SiPhp, color: "text-indigo-400" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "GitHub", icon: SiGithub, color: "text-gray-300" },
  { name: "Firebase", icon: SiFirebase, color: "text-amber-400" },
  { name: "Expo", icon: SiExpo, color: "text-black" },
  { name: "Python", icon: SiPython, color: "text-yellow-300" },
];

const Skills: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="bg-[linear-gradient(to_bottom,_#C5B6D7_0%,_oklch(20.5%_0_0)_5%)] min-h-screen py-20"
    >
      <div className="container lg:px-12">
        <h1 className="text-white font-bold text-5xl text-center mb-10">
          Mes compétences
        </h1>

        <div className="grid md:grid-cols-4 grid-cols-3 px-12 md:w-1/2 gap-4 mx-auto">
          {skills.map(({ name, icon: Icon, color }) => (
            <TiltCard key={name} cursorPos={cursorPos}>
              <div className="flex flex-col items-center gap-3">
                <Icon className={`text-5xl ${color}`} />
                <span className="text-white font-medium">{name}</span>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
