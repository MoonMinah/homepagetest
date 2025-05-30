import React from "react";
import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
interface Skill {
  id: number;
  title: string;
  logo: string;
  desc: string;
  percent: number;
}

const frontSkills: Skill[] = [
  {
    id: 0,
    title: "html",
    logo: "./imges/html.png",
    desc: "hyper text markup language",
    percent: 90,
  },
  {
    id: 1,
    title: "html",
    logo: "./imges/typescript.png",
    desc: "hyper text markup language",
    percent: 90,
  },
  {
    id: 2,
    title: "html",
    logo: "./imges/css.png",
    desc: "hyper text markup language",
    percent: 90,
  },
  {
    id: 3,
    title: "html",
    logo: "./imges/typescript.png",
    desc: "hyper text markup language",
    percent: 90,
  },
  {
    id: 4,
    title: "html",
    logo: "./imges/react.png",
    desc: "hyper text markup language",
    percent: 90,
  },
  {
    id: 5,
    title: "html",
    logo: "./imges/git.png",
    desc: "hyper text markup language",
    percent: 90,
  },
  {
    id: 6,
    title: "html",
    logo: "./imges/figma.png",
    desc: "hyper text markup language",
    percent: 90,
  },
];

const Skill = () => {
  return (
    <div className="main skill">
      <div className="content-inner">
        <SectionTitle title="Skill" subTitle="내가 할 수 있는 스킬" />
        <div>
          <ul className="skill-list"></ul>
          {frontSkills.map((skill) => (
            <li key={skill.id}>
              <SkillCard
                id={skill.id}
                title={skill.title}
                logo={skill.logo}
                desc={skill.desc}
                percent={skill.percent}
              />
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
