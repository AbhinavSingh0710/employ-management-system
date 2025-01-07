import React from "react";

const TaskListNumbers = ({data}) => {
  console.log(data);
  
  return (
    <div className="flex mt-10 screen justify-between gap-5">
      <div className="rounded-xl px-9 py-6 w-[45%] bg-red-400">
        <h2 className="text-3xl font-semibold">{data && data.taskCount ? data.taskCount.newTask : "error"}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl px-9 py-6 w-[45%] bg-blue-400">
        <h2 className="text-3xl font-semibold">{data && data.taskCount ? data.taskCount.completed : "error"}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="rounded-xl px-9 py-6 w-[45%] bg-green-400">
        <h2 className="text-3xl font-semibold">{data && data.taskCount ? data.taskCount.active : "error"}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="rounded-xl px-9 py-6 w-[45%] bg-yellow-400">
        <h2 className="text-3xl font-semibold">{data && data.taskCount ? data.taskCount.failed : "error"}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
