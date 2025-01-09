import React from "react";

const AcceptTask = ({ data }) => {
  console.log(data);

  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-red-400 p-5 rounded-xl">
      <div className="flex items-center justify-between">
        <h3 className="bg-red-600 w-fit px-3 py-1 rounded text-sm">{data.category}</h3>
        <h4 className="font-semibold text-sm mr-5 ">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="flex justify-between mt-5 ">
        <button className="bg-green-500 py-1 px-2 text-sm rounded-full">
          Mark as Completed
        </button>
        <button className="bg-red-500 py-1 px-2 text-sm rounded-full">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
