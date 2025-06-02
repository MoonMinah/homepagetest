import React from "react";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <div className="main about">
      <div className="content-inner">
        <SectionTitle title="About Me" subTitle="문민아" />
        <div className="about-wrap">
          <p>
            <span className="big-text">#열정적인</span>
            <span>#기초에 충실한</span>
            <span>#사용자 경험</span>
          </p>
          <p>
            <span>#백엔드</span>
            <span className="big-text">#함께 일하고 싶은</span>
          </p>
          <p>
            <span className="big-text">#실용적인</span>
            <span>#풀스텍</span>
          </p>
        </div>
        <div className="photo-wrap">
          <p>
            3<small>+</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
