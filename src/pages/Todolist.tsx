import React from "react";
import SectionTitle from "../components/SectionTitle";

const Todolist = () => {
  return (
    <div className="main todolist">
      <div className="content-inner">
        <SectionTitle title="Todo List" subTitle="오늘의 할 일 관리" />
        <div>TodoList 본문</div>
      </div>
    </div>
  );
};

export default Todolist;
