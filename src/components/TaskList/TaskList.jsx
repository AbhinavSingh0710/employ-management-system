import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {


  return (
    <div
      id="tasklist"
      className="h-[57%] flex items-center justify-start gap-5 w-full py-5 mt-10 flex-nowrap overflow-x-auto"
    >
      {data && data.tasks
        ? data.tasks.map((elem,id) => {
            if (elem.active) {
              return <AcceptTask key={id} data = {elem} />;
            }
            if (elem.newTask) {
              return <NewTask key={id} data = {elem} />;
            }
            if (elem.completed) {
              return <CompleteTask key={id} data = {elem} />;
            }
            if (elem.failed) {
              return <FailedTask key={id} data = {elem} />;
            }
          })
        : "error"}
    </div>
  );
};

export default TaskList;
