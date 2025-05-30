import React from "react";
import SectionTitle from "../components/SectionTitle";
import TodoApp from "../components/todolist/TodoApp";

const Todolist = () => {
  return (
    <div className="main todolist">
      <div className="content-inner">
        <SectionTitle title="Todo List" subTitle="오늘의 할 일 관리" />
        <div>
          <TodoApp />
        </div>
      </div>
    </div>
  );
};

export default Todolist;
